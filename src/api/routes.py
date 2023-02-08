"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint, json
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token,jwt_required, get_jwt_identity

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/signup', methods=['POST'])
def login_signup():
    data = json.loads(request.data)
    #user = User.query.filter_by(name=data["name"],lastname=data["lastname"],email=data["email"], password=data["password"]).first()
    userObj = User(name=data["name"],lastname=data["lastname"],email=data["email"], password=data["password"])
    #if user is None:
        #return jsonify({"msg": "Bad username or password"}), 401
    access_token = create_access_token(identity=user.id)
    db.session.add(userObj)
    db.session.commit()
    #return jsonify({ "token": access_token, "user_id": user.id, "user": user }), 200
    return jsonify({"ok":"ok"}), 200
