"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint, json
from api.models import db, User, Web, Branding, Content
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token,jwt_required, get_jwt_identity
import bcrypt

api = Blueprint('api', __name__)

#user endpoints
@api.route('/signup', methods=['POST'])
def login_signup():
    data = json.loads(request.data)
    
    salt = bcrypt.gensalt()
    hashed_password = bcrypt.hashpw(data["password"].encode('utf-8'),salt)
    
    user = User(name=data["name"],lastname=data["lastname"],email=data["email"], password=hashed_password)
    db.session.add(user)
    db.session.commit()
    
    access_token = create_access_token(identity=user.id)

    return jsonify({"status":"ok", "token": access_token, "user_id":user.id}), 200
    
@api.route('/login', methods=['POST'])
def login():
    data = json.loads(request.data)
    user = User.query.filter_by(email=data["email"]).first()
    
    salt = bcrypt.gensalt()
    hash_pass = bcrypt.hashpw(user.password.encode('utf-8'),salt)
    
    if not user:
        return 'User not found', 404

    if bcrypt.checkpw(user.password.encode('utf-8'), hash_pass):
        access_token = create_access_token(identity=user.id)
        return  jsonify({"status":"ok", "token":access_token, "user":user.email})
    else:
        return jsonify({"status":"error"})

@api.route('/users', methods=['GET'])
def get_users():
    users = [user.serialize() for user in User.query.all()]
    response_body = {
        "message":"ok",
        "result":users
    }
    return jsonify(response_body), 200

@api.route('/users/<int:id>', methods=['GET'])
def get_user(id):
    user = User.query.get(id).serialize()
    if user is None:
        abort(404)
    response_body = {
        "message":"ok",
        "result":user
    }
    return jsonify(response_body), 200

#restaurant endpoints

#endpoint to create the restaurant by form button
@api.route('/createrestautant', methods=['POST']) #necesita autenticación
def create_restaurant():
    data = json.loads(request.data)
    restaurant = Web(name=data["name"],phone_number=data["phone_number"], user_id=data["user_id"])
    db.session.add(restaurant)
    db.session.commit()
    return jsonify({"message":"ok"}), 200

#public endpoint to get all restaurants
@api.route('/restaurants', methods=['GET'])
def get_restaurants():
    restaurants = [restaurant.serialize() for restaurant in Web.query.all()]
    response_body = {
        "message":"ok",
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
        "message":"ok",
        "result": restaurant
    }
    return jsonify(response_body), 200

#restaurant branding endpoints
#First time you set the branding
@api.route('/setbranding', methods=['POST']) #Necesita autenticación
def set_branding():
    data = json.loads(request.data)

    branding_web=Web.query.get(data["web_id"])

    if branding_web is None:
        abort(404)

    branding = Branding(
    color_bg1=data["color_bg1"],
    color_bg2=data["color_bg2"],
    color_font1=data["color_bg1"],
    color_hover1=data["color_hover1"],
    logo=data["logo"],
    logo_favicon=data["logo_favicon"],
    font=data["font"],
    brand_name=data["brand_name"],
    web_id=data["web_id"])
    db.session.add(branding)
    db.session.commit()
    return jsonify({"message":"ok"}), 200

#public endpoint to get all restaurant branding
@api.route('/branding/<int:web_id>', methods=['GET'])
def get_branding_from_restaurant(web_id):
    branding_from_restaurant = Branding.query.filter_by(web_id=web_id).first().serialize()
    if branding_from_restaurant is None:
        abort(404)
    response_body = {
        "message":"ok",
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
    return jsonify({"message":"ok"}), 200

#public endpoint to get all restaurant branding
@api.route('/web_content/<int:web_id>', methods=['GET'])
def get_content_from_restaurant(web_id):
    content_from_restaurant = Content.query.filter_by(web_id=web_id).first().serialize()
    if content_from_restaurant is None:
        abort(404)
    response_body = {
        "message":"ok",
        "from_restaurant_id": web_id,
        "result": content_from_restaurant
    }
    return jsonify(response_body), 200
