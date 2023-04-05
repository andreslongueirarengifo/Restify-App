"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint, json, abort
from api.models import db, User, Web, Branding, Content, Food, Food_category, Allergens
from api.utils import generate_sitemap, APIException
from flask_cors import cross_origin
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
import requests
import bcrypt

import cloudinary
import cloudinary.uploader
from cloudinary.utils import cloudinary_url

api = Blueprint('api', __name__)

cloudinary.config(
    cloud_name="dnmfh4xnv",
    api_key="641646317717588",
    api_secret="3SCfTB9Ln1_J0mACC4XGhp4TH0U",
    secure=True
)


# user endpoints
@api.route('/signup', methods=['POST'])
def login_signup():
    data = json.loads(request.data)

    salt = bcrypt.gensalt()
    hashed_password = bcrypt.hashpw(data["password"].encode('utf-8'), salt)

    decoded_password = hashed_password.decode('utf-8')

    user = User(name=data["name"], lastname=data["lastname"],
                email=data["email"], avatar=data["avatar"], password=decoded_password)
    db.session.add(user)
    db.session.commit()

    access_token = create_access_token(identity=user.id)

    return jsonify({"status": "ok", "token": access_token, "user_id": user.id}), 200


@api.route('/login', methods=['POST'])
def login():
    data = json.loads(request.data)
    user = User.query.filter_by(email=data["email"]).first()

    if not user:
        return jsonify({"msg": "User not found"}), 404

    if bcrypt.checkpw(data["password"].encode('utf-8'), user.password.encode('utf-8')):
        access_token = create_access_token(identity=user.id)
        return jsonify({"status": "ok", "token": access_token, "user": user.email}), 200
    else:
        return jsonify({"status": "error"}), 404


@api.route('/users', methods=['GET'])
def get_users():
    users = [user.serialize() for user in User.query.all()]
    response_body = {
        "msg": "ok",
        "result": users
    }
    return jsonify(response_body), 200


@api.route('/currentuser', methods=['GET'])
@jwt_required()
def get_current_user():
    current_user_id = get_jwt_identity()
    user = User.query.get(current_user_id).serialize()
    if user is None:
        abort(404)
    response_body = {
        "msg": "ok",
        "result": user
    }
    return jsonify(response_body), 200

# restaurant endpoints
# endpoint to create the restaurant by form button


@api.route('/createrestautant', methods=['POST'])  # necesita autenticación
@jwt_required()
@cross_origin()
def create_restaurant():
    current_user_id = get_jwt_identity()
    data = json.loads(request.data)
    restaurant = Web(name=data["url_name"], user_id=current_user_id)
    db.session.add(restaurant)
    db.session.commit()
    response_body = jsonify({
        "msg": "ok",
        "result": restaurant.serialize_id()
    })
    return response_body, 200

# public endpoint to get all restaurants


@api.route('/restaurants', methods=['GET'])
def get_restaurants():
    restaurants = [restaurant.serialize() for restaurant in Web.query.all()]
    response_body = {
        "msg": "ok",
        "result": restaurants
    }
    return jsonify(response_body), 200

# public endpoint to get all restaurant basic info


@api.route('/restaurants/<int:id>', methods=['GET'])
def get_restaurant_by_id(id):
    restaurant = Web.query.get(id).serialize()
    if restaurant is None:
        abort(404)
    response_body = {
        "msg": "ok",
        "result": restaurant
    }
    return jsonify(response_body), 200


@api.route('/restaurants/<string:name>', methods=['GET'])
@jwt_required()
def get_restaurant_by_name(name):
    restaurant = Web.query.filter_by(name=name).first().serialize()
    if restaurant is None:
        abort(404)
    response_body = {
        "msg": "ok",
        "result": restaurant
    }
    return jsonify(response_body), 200

# private endpoints


@api.route('/currentrestaurants', methods=['GET'])
@jwt_required()
def get_current_user_restaurants():
    current_user_id = get_jwt_identity()
    current_user_restaurants = [restaurant.serialize(
    ) for restaurant in Web.query.filter_by(user_id=current_user_id).all()]
    if current_user_restaurants is None:
        abort(404)
    response_body = {
        "msg": "ok",
        "from_restaurant_id": current_user_id,
        "result": current_user_restaurants
    }
    return jsonify(response_body), 200


# restaurant branding endpoints
# First time you set the branding
@api.route('/setbranding', methods=['POST', 'PUT'])
@jwt_required()  # Necesita autenticación
@cross_origin()
def set_branding():
    data = json.loads(request.data)

    branding_web = Web.query.get(data["web_id"])

    if branding_web is None:
        abort(404)

    if request.method == 'POST':
        # Create a new Branding object and add it to the database

        branding = Branding(
            color_bg1=data["color_bg1"],
            color_bg2=data["color_bg2"],
            color_font1=data["color_font1"],
            color_font2=data["color_font2"],
            color_hover1=data["color_hover1"],
            logo=data["web_id"],
            logo_favicon=data["web_id"],
            font=data["font"],
            brand_name=data["brand_name"],
            web_id=data["web_id"]
        )
        db.session.add(branding)
        db.session.commit()

    elif request.method == 'PUT':
        # Modify an existing Branding object and update the database
        branding_id = data["branding_id"]
        branding = Branding.query.get(branding_id)

        if branding is None:
            abort(404)

        branding.color_bg1 = request.json.get("color_bg1", branding.color_bg1)
        branding.color_bg2 = request.json.get("color_bg2", branding.color_bg2)
        branding.color_font1 = request.json.get(
            "color_font1", branding.color_font1)
        branding.color_font2 = request.json.get(
            "color_font2", branding.color_font2)
        branding.color_hover1 = request.json.get(
            "color_hover1", branding.color_hover1)
        branding.logo = request.json.get("logo", branding.logo)
        branding.logo_favicon = request.json.get(
            "logo_favicon", branding.logo_favicon)
        branding.font = request.json.get("font", branding.font)
        branding.brand_name = request.json.get(
            "brand_name", branding.brand_name)

        db.session.commit()

    response_body = jsonify({
        "msg": "ok",
        "result": branding.serialize()
    })
    return response_body, 200

# public endpoint to get all restaurant branding


@api.route('/branding/<int:brand_id>/logo', methods=['PUT'])
def handle_upload_logo(brand_id):
    print(request.files)
    if 'logo' in request.files:

        current_brand = Branding.query.get(brand_id)
        
        result = cloudinary.uploader.upload(
            request.files['logo'], public_id=f'logo_{current_brand.web.id}_{brand_id}')


        current_brand.logo = result['secure_url']

        db.session.add(current_brand)
        db.session.commit()

        return jsonify(current_brand.serialize()), 200
    else:
        raise APIException('Missing logo on the FormData')


@api.route('/branding/<int:brand_id>/favicon', methods=['PUT'])
def handle_upload_favicon(brand_id):
    if 'favicon' in request.files:

        current_brand = Branding.query.get(brand_id)

        result = cloudinary.uploader.upload(
            request.files['favicon'], public_id=f'favicon_{current_brand.web.id}_{brand_id}')
    
        current_brand.logo_favicon = result['secure_url']

        db.session.add(current_brand)
        db.session.commit()

        return jsonify(current_brand.serialize()), 200
    else:
        raise APIException('Missing logo on the FormData')

@api.route('/webcontent/<int:content_id>/img', methods=['PUT'])
def handle_upload_header(content_id):
    if 'img' in request.files:

        current_content = Content.query.get(content_id)

        result = cloudinary.uploader.upload(request.files['img'], public_id=f'img_{current_content.web.id}_{content_id}')

        current_content.image_link = result['secure_url']

        db.session.add(current_content)
        db.session.commit()

        return jsonify(current_content.serialize()), 200
    else:
        raise APIException('Missing logo on the FormData')


@api.route('/branding/<int:web_id>', methods=['GET'])
def get_branding_from_restaurant(web_id):
    branding_from_restaurant = Branding.query.filter_by(
        web_id=web_id).first().serialize()
    if branding_from_restaurant is None:
        abort(404)
    response_body = {
        "msg": "ok",
        "from_restaurant_id": web_id,
        "result": branding_from_restaurant
    }
    return jsonify(response_body), 200

# restaurant content endpoints
# First time you set the content


@api.route('/setcontent', methods=['POST', 'PUT'])
@jwt_required()  # Necesita autenticación
def set_content():
    data = json.loads(request.data)

    content_web = Web.query.get(data["web_id"])

    if content_web is None:
        abort(404)

    if request.method == 'POST':
        # Create a new Content object and add it to the database
        content = Content(
            phone_number=data["phone_number"],
            instagram=data["instagram"],
            twitter=data["twitter"],
            facebook=data["facebook"],
            location_street=data["location_street"],
            location_city=data["location_city"],
            location_coordinates=data["location_coordinates"],
            image_link=data["image_link"],
            web_id=data["web_id"]
        )
        db.session.add(content)
        db.session.commit()

    elif request.method == 'PUT':
        # Modify an existing Content object and update the database
        content_id = data["content_id"]
        content = Content.query.get(content_id)

        if content is None:
            abort(404)

        # Generate the coordinates based on the street and city parameters
        query = f"{request.json.get('location_street', content.location_street)}, {request.json.get('location_city', content.location_city)}, Spain"
        params = {
            'access_key': '2cf36a4863b2e5d59892ba8631a3d81f',
            'query': query,
            'country': 'ES',
            'limit': 1
        }
        response = requests.get('http://api.positionstack.com/v1/forward', params=params)
        if response.status_code == 200:
            result = response.json()
            if result['data']:
                coordinates = f"{result['data'][0]['latitude']},{result['data'][0]['longitude']}"
            else:
                # habrá que ver como controlamos los errores
                abort(400, 'Location not found')
        else:
            # Handle error case
            abort(500)

        content.phone_number = request.json.get('phone_number', content.phone_number)
        content.instagram = request.json.get('instagram', content.instagram)
        content.twitter = request.json.get('twitter', content.twitter)
        content.facebook = request.json.get('facebook', content.facebook)
        content.location_street = request.json.get('location_street', content.location_street)
        content.location_city = request.json.get('location_city', content.location_city)
        content.location_coordinates = coordinates
        content.image_link = request.json.get('image_link', content.image_link)

        db.session.commit()

    return jsonify({"msg": "ok"}), 200


# public endpoint to get all restaurant content
@api.route('/web_content/<int:web_id>', methods=['GET'])
def get_content_from_restaurant(web_id):
    content_from_restaurant = Content.query.filter_by(
        web_id=web_id).first().serialize()
    if content_from_restaurant is None:
        abort(404)
    response_body = {
        "msg": "ok",
        "from_restaurant_id": web_id,
        "result": content_from_restaurant
    }
    return jsonify(response_body), 200


# endpoint for template data
@api.route('/template_data/<restaurant_name>', methods=['GET'])
def get_template_data(restaurant_name):
    restaurant_web = Web.query.filter_by(name=restaurant_name).first()
    web_id = restaurant_web.id
    web_branding = Branding.query.filter_by(web_id=web_id).first()
    web_content = Content.query.filter_by(web_id=web_id).first()
    web_categories = Food_category.query.filter_by(web_id=web_id).all()
    food_categories = []
    for category in web_categories:
        category_dict = {}
        category_dict['name'] = category.name
        category_foods = Food.query.filter_by(category_id=category.id).all()
        category_dict['dishes'] = []
        for food in category_foods:
            food_dict = {}
            food_dict['name'] = food.name
            food_dict['description'] = food.description
            food_dict['price'] = food.price
            food_dict['photo_url'] = food.image
            allergens = Allergens.query.filter_by(food_id=food.id).first()
            food_dict['allergens'] = {}
            if allergens:
                food_dict['allergens']['egg'] = allergens.egg
                food_dict['allergens']['fish'] = allergens.fish
                food_dict['allergens']['peanuts'] = allergens.peanuts
                food_dict['allergens']['soja'] = allergens.soja
                food_dict['allergens']['dairy'] = allergens.dairy
                food_dict['allergens']['nuts'] = allergens.nuts
                food_dict['allergens']['celery'] = allergens.celery
                food_dict['allergens']['mustard'] = allergens.mustard
                food_dict['allergens']['sesame'] = allergens.sesame
                food_dict['allergens']['sulphites'] = allergens.sulphites
                food_dict['allergens']['mollusks'] = allergens.mollusks
                food_dict['allergens']['lupines'] = allergens.lupines
                food_dict['allergens']['gluten'] = allergens.gluten
                food_dict['allergens']['crustaceans'] = allergens.crustaceans
            category_dict['dishes'].append(food_dict)
        food_categories.append(category_dict)
    print(food_categories)
    if restaurant_name is None:
        abort(404)
    response_body = {
        "message": "ok",
        "from_restaurant_name": restaurant_name,
        "result": {
            "color1": web_branding.color_font1,
            "color2": web_branding.color_font2,
            "colorback1": web_branding.color_bg1,
            "colorback2": web_branding.color_bg2,
            "colorextra1": web_branding.color_hover1,
            "logo_url": web_branding.logo,
            "logo_favicon_url": web_branding.logo_favicon,
            "font": web_branding.font,
            "image_link": web_content.image_link,
            "facebook_url": web_content.facebook,
            "instagram_url": web_content.instagram,
            "twitter_url": web_content.twitter,
            "phone_number": web_content.phone_number,
            "restaurant_name": web_branding.brand_name,
            "restaurant_city": web_content.location_city,
            "restaurant_street": web_content.location_street,
            "restaurant_coordinates": web_content.location_coordinates,
            "food_categories": food_categories
        }
    }
    return jsonify(response_body), 200

# endpoint to create category


@api.route('/createcategory', methods=['POST', 'PUT'])
# @jwt_required()  # Necesita autenticación
def create_category():
    data = json.loads(request.data)

    content_web = Web.query.filter_by(name=data["web_name"]).first()

    if content_web is None:
        abort(404)

    if request.method == 'POST':
        # Create a new Food_category object and add it to the database
        food_category = Food_category(
            name=data["name"],
            web=content_web,
        )
        db.session.add(food_category)
        db.session.commit()

    elif request.method == 'PUT':
        # Modify an existing Content object and update the database
        category_id = data["category_id"]
        category = Food_category.query.get(category_id)

        if category is None:
            abort(404)

        category.name = request.json.get('name', category.name)

        db.session.commit()

    return jsonify({"msg": "ok"}), 200

#list all the categories of a restaurant
@api.route('/foodcategories/<name>', methods=['GET'])
def get_categories_from_restaurant(name):
    restaurant_web = Web.query.filter_by(name=name).first()
    web_id = restaurant_web.id
    categories = Food_category.query.filter_by(web_id=web_id).all()

    if not categories:
        response_body = {
            "msg": "no categories",
            "from_restaurant_id": web_id,
            "result": []
        }
    else:
        categories_list = [category.serialize() for category in categories]
        response_body = {
            "msg": "ok",
            "from_restaurant_id": web_id,
            "result": categories_list
        }
    return jsonify(response_body), 200


# Endpoint for deleting a category
@api.route("/deletecategory/<int:category_id>", methods=["DELETE"])
def category_delete(category_id):
    category = Food_category.query.get(category_id)
    if not category:
        return jsonify({"msg": "Category not found"}), 404

    # Delete all the foods in the category
    foods = Food.query.filter_by(category_id=category_id).all()
    for food in foods:
        allergens = Allergens.query.filter_by(food_id=food.id).first()
        db.session.delete(allergens)
        db.session.delete(food)

    # Delete the category
    db.session.delete(category)
    db.session.commit()

    return jsonify({"msg": "ok"}), 200

#endpoint to create or update food
@api.route('/food', methods=['POST', 'PUT'])
#@jwt_required()  # Necesita autenticación
@cross_origin()
def create_or_update_food():
    data = json.loads(request.data)
    print(data)
    if data is None:
        abort(400, 'Missing JSON data')

    content_web = Web.query.filter_by(name=data["web_name"]).first()
    
    if content_web is None:
        abort(404)

    if request.method == 'POST':
        # Create a new Food object and add it to the database
        food = Food(
            name=data["name"],
            description=data["description"],
            price=data["price"],
            category_id=data["category_id"],
            web_id=content_web.id,
        )
        db.session.add(food)
        db.session.commit()

        # Create allergens for the new food item
        allergens = data.get("allergens", {})
        allergens_table = Allergens(food_id=food.id, **allergens)
        db.session.add(allergens_table)
        db.session.commit()

    elif request.method == 'PUT':
        # Modify an existing Food object and update the database
        food_id = data["food_id"]
        food = Food.query.get(food_id)

        if food is None:
            abort(404)

        food.name = data.get('name', food.name)
        food.description = data.get('description', food.description)
        food.price = data.get('price', food.price)
        allergens = data.get("allergens")
        if allergens:
            allergens_table = Allergens.query.filter_by(food_id=food.id).first()
            if allergens_table:
                for allergen, value in allergens.items():
                    setattr(allergens_table, allergen, value)
            else:
                allergens_table = Allergens(food_id=food.id, **allergens)
                db.session.add(allergens_table)
                db.session.commit()

        db.session.commit()

    return jsonify({"msg": "ok"}), 200

#list of all the food in a category of a restaurant
@api.route('/foodinacategory/<restaurant_name>/<categoryname>', methods=['GET'])
def get_food_from_category(restaurant_name, categoryname):
    restaurant = Web.query.filter_by(name=restaurant_name).first()
    if restaurant is None:
        return jsonify({"msg": "No restaurant found"}), 404

    category = Food_category.query.filter_by(name=categoryname).first()
    if category is None:
        return jsonify({"msg": "No category found"}), 404

    food_from_category = Food.query.filter_by(web_id=restaurant.id, category_id=category.id).all()

    serialized_food = []
    for food in food_from_category:
        allergens = food.allergens[0] if food.allergens else None
        serialized_allergens = {
            "egg": allergens.egg if allergens else False,
            "fish": allergens.fish if allergens else False,
            "peanuts": allergens.peanuts if allergens else False,
            "soja": allergens.soja if allergens else False,
            "dairy": allergens.dairy if allergens else False,
            "nuts": allergens.nuts if allergens else False,
            "celery": allergens.celery if allergens else False,
            "mustard": allergens.mustard if allergens else False,
            "sesame": allergens.sesame if allergens else False,
            "sulphites": allergens.sulphites if allergens else False,
            "mollusks": allergens.mollusks if allergens else False,
            "lupines": allergens.lupines if allergens else False,
            "gluten": allergens.gluten if allergens else False,
            "crustaceans": allergens.crustaceans if allergens else False
        }
        serialized_food.append({
            "id": food.id,
            "name": food.name,
            "description": food.description,
            "price": food.price,
            "category": food.category.name,
            "allergens": serialized_allergens
        })
    response_body = {
        "msg": "ok",
        "from_restaurant": restaurant_name,
        "category": categoryname,
        "result": serialized_food
    }
    return jsonify(response_body), 200

#list of all the food in a restaurant
@api.route('/food/<string:restaurant_name>', methods=['GET'])
def get_food_from_restaurant(restaurant_name):
    restaurant = Web.query.filter_by(name=restaurant_name).first()
    if restaurant is None:
        return jsonify({"msg": "No restaurant found"}), 404

    food_from_restaurant = Food.query.filter_by(web_id=restaurant.id).all()

    serialized_food = []
    for food in food_from_restaurant:
        allergens = food.allergens[0] if food.allergens else None
        serialized_allergens = {
            "egg": allergens.egg if allergens else False,
            "fish": allergens.fish if allergens else False,
            "peanuts": allergens.peanuts if allergens else False,
            "soja": allergens.soja if allergens else False,
            "dairy": allergens.dairy if allergens else False,
            "nuts": allergens.nuts if allergens else False,
            "celery": allergens.celery if allergens else False,
            "mustard": allergens.mustard if allergens else False,
            "sesame": allergens.sesame if allergens else False,
            "sulphites": allergens.sulphites if allergens else False,
            "mollusks": allergens.mollusks if allergens else False,
            "lupines": allergens.lupines if allergens else False,
            "gluten": allergens.gluten if allergens else False,
            "crustaceans": allergens.crustaceans if allergens else False
        }
        serialized_food.append({
            "id": food.id,
            "name": food.name,
            "description": food.description,
            "price": food.price,
            "category": food.category.name,
            "allergens": serialized_allergens
        })

    response_body = {
        "msg": "ok",
        "from_restaurant": restaurant_name,
        "result": serialized_food
    }
    return jsonify(response_body), 200

# Endpoint for deleting food
@api.route("/food/<int:food_id>", methods=["DELETE"])
def delete_food(food_id):
    food = Food.query.get(food_id)

    if food is None:
        abort(404)

    # Delete allergens for the food item
    allergens = Allergens.query.filter_by(food_id=food.id).first()
    if allergens:
        db.session.delete(allergens)

    db.session.delete(food)
    db.session.commit()

    return jsonify({"msg": "ok"}), 200



@api.route('/image/<int:food_id>', methods=['PUT'])
def handle_upload_food(food_id):
    if 'image' in request.files:
        result = cloudinary.uploader.upload(request.files['image'], public_id=f'dish_{food_id}')

        current_dish = Food.query.get(food_id)
        current_dish.image = result['secure_url']

        db.session.add(current_dish)
        db.session.commit()

        return jsonify(ok), 200
    else:
        raise APIException('Missing image on the FormData')

@api.route("/deleterestaurant/<int:id>", methods=["DELETE"])
@jwt_required()
def delete_restaurant(id):
    restaurant = Web.query.get(id)
    if not restaurant:
        return jsonify({"msg": "restaurant not found"}), 404
    
    branding_from_restaurant = Branding.query.filter_by(web_id=id).all()
    content_from_restaurant = Content.query.filter_by(web_id=id).all()
    categories_from_restaurant = Food_category.query.filter_by(web_id=id).all()
    food_from_restaurant = Food.query.filter_by(web_id=id).all()

    for branding in branding_from_restaurant:
        db.session.delete(branding)
    for content in content_from_restaurant:
        db.session.delete(content)
    for category in categories_from_restaurant:
        db.session.delete(category)
    for food in food_from_restaurant:
        db.session.delete(food)

    db.session.delete(restaurant)
    db.session.commit()

    return jsonify({"msg": "restaurant deleted"}), 200

