"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint, json
from api.models import db, User, Web, Branding, Content
from api.utils import generate_sitemap, APIException
from flask_cors import cross_origin
from flask_jwt_extended import create_access_token,jwt_required, get_jwt_identity
import bcrypt

api = Blueprint('api', __name__)

#user endpoints
@api.route('/signup', methods=['POST'])
def login_signup():
    data = json.loads(request.data)

    salt = bcrypt.gensalt()
    hashed_password = bcrypt.hashpw(data["password"].encode('utf-8'),salt)

    decoded_password = hashed_password.decode('utf-8')

    user = User(name=data["name"],lastname=data["lastname"],email=data["email"], password=decoded_password)
    db.session.add(user)
    db.session.commit()

    access_token = create_access_token(identity=user.id)

    return jsonify({"status":"ok", "token": access_token, "user_id":user.id}), 200

@api.route('/login', methods=['POST'])
def login():
    data = json.loads(request.data)
    user = User.query.filter_by(email=data["email"]).first()

    if not user:
        return jsonify({"msg":"User not found"}), 404


    if bcrypt.checkpw(data["password"].encode('utf-8'), user.password.encode('utf-8')):
        access_token = create_access_token(identity=user.id)
        return  jsonify({"status":"ok", "token":access_token, "user":user.email}), 200
    else:
        return jsonify({"status":"error"}), 404

@api.route('/users', methods=['GET'])
def get_users():
    users = [user.serialize() for user in User.query.all()]
    response_body = {
        "msg":"ok",
        "result":users
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
        "msg":"ok",
        "result":user
    }
    return jsonify(response_body), 200

#restaurant endpoints

#endpoint to create the restaurant by form button
@api.route('/createrestautant', methods=['POST']) #necesita autenticación
@jwt_required()
@cross_origin()
def create_restaurant():
    current_user_id = get_jwt_identity()
    data = json.loads(request.data)
    print("--------------------")
    print(data)
    print("--------------------")
    restaurant = Web(name=data["url_name"], user_id=current_user_id)
    db.session.add(restaurant)
    db.session.commit()
    response_body = jsonify({
        "msg":"ok",
        "result": restaurant.serialize_id()
    })
    return response_body, 200

#public endpoint to get all restaurants
@api.route('/restaurants', methods=['GET'])
def get_restaurants():
    restaurants = [restaurant.serialize() for restaurant in Web.query.all()]
    response_body = {
        "msg":"ok",
        "result": restaurants
    }
    return jsonify(response_body), 200

#public endpoint to get all restaurant basic info
@api.route('/restaurants/<int:id>', methods=['GET'])
def get_restaurant(id):
    restaurant = Web.query.get(id).serialize()
    if restaurant is None:
        abort(404)
    response_body = {
        "msg":"ok",
        "result": restaurant
    }
    return jsonify(response_body), 200

#private endpoints
@api.route('/currentrestaurants', methods=['GET'])
@jwt_required()
def get_current_user_restaurants():
    current_user_id = get_jwt_identity()
    current_user_restaurants = [restaurant.serialize() for restaurant in Web.query.filter_by(user_id=current_user_id).all()]
    if current_user_restaurants is None:
        abort(404)
    response_body = {
        "msg":"ok",
        "from_restaurant_id": current_user_id,
        "result": current_user_restaurants
    }
    return jsonify(response_body), 200


#restaurant branding endpoints
#First time you set the branding
@api.route('/setbranding', methods=['POST'])
@jwt_required() #Necesita autenticación
@cross_origin()
def set_branding():
    current_user_id = get_jwt_identity()
    data = json.loads(request.data)
    branding_web=Web.query.get(data["web_id"])

    if branding_web is None:
        abort(404)

    branding = Branding(
    color_bg1=data["color_bg1"],
    color_bg2=data["color_bg2"],
    color_font1=data["color_font1"],
    color_font2=data["color_font2"],
    color_hover1=data["color_hover1"],
    logo=data["logo"],
    logo_favicon=data["logo_favicon"],
    font=data["font"],
    brand_name=data["brand_name"],
    web_id=data["web_id"])
    db.session.add(branding)
    db.session.commit()
    response_body = jsonify({
        "msg":"ok",
        "result": branding.serialize()
    })
    return response_body, 200

#public endpoint to get all restaurant branding
@api.route('/branding/<int:web_id>', methods=['GET'])
def get_branding_from_restaurant(web_id):
    branding_from_restaurant = Branding.query.filter_by(web_id=web_id).first().serialize()
    if branding_from_restaurant is None:
        abort(404)
    response_body = {
        "msg":"ok",
        "from_restaurant_id": web_id,
        "result": branding_from_restaurant
    }
    return jsonify(response_body), 200

#restaurant content endpoints
#First time you set the content
@api.route('/setcontent', methods=['POST']) #Necesita autenticación
def set_content():
    data = json.loads(request.data)

    content_web=Web.query.get(data["web_id"])

    if content_web is None:
        abort(404)

    content = Content(
    description=data["description"],
    instagram=data["instagram"],
    twitter=data["twitter"],
    facebook=data["facebook"],
    tiktok=data["tiktok"],
    location=data["location"],
    header=data["header"],
    web_id=data["web_id"]
    )
    db.session.add(content)
    db.session.commit()
    return jsonify({"msg":"ok"}), 200

#public endpoint to get all restaurant branding
@api.route('/web_content/<int:web_id>', methods=['GET'])
def get_content_from_restaurant(web_id):
    content_from_restaurant = Content.query.filter_by(web_id=web_id).first().serialize()
    if content_from_restaurant is None:
        abort(404)
    response_body = {
        "msg":"ok",
        "from_restaurant_id": web_id,
        "result": content_from_restaurant
    }
    return jsonify(response_body), 200
