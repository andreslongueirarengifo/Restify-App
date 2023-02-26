from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'user'
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    name = db.Column(db.String(50), unique=False, nullable=False)
    lastname = db.Column(db.String(50), unique=False, nullable=False)
    password = db.Column(db.String(200), unique=False, nullable=False)

    def __repr__(self):
        return f'{self.email}'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "name": self.name,
            "lastname": self.lastname
        }

class Web(db.Model):
    __tablename__ = 'web'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), unique=True, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    user = db.relationship('User', backref='web')

    def __repr__(self):
        return f'{self.id}-{self.name}'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name
        }

class Branding(db.Model):
    __tablename__ = 'branding'
    id = db.Column(db.Integer, primary_key=True)
    color_bg1 = db.Column(db.String(100), unique=False, nullable=False)
    color_bg2 = db.Column(db.String(100), unique=False, nullable=False)
    color_font1 = db.Column(db.String(100), unique=False, nullable=False)
    color_font2 = db.Column(db.String(100), unique=False, nullable=False)
    color_hover1 = db.Column(db.String(100), unique=False, nullable=False)
    logo = db.Column(db.String(200), unique=True, nullable=False)
    logo_favicon = db.Column(db.String(200), unique=True, nullable=False)
    font = db.Column(db.String(200), unique=False, nullable=False)
    brand_name = db.Column(db.String(100), unique=False, nullable=False)
    web_id = db.Column(db.Integer, db.ForeignKey('web.id'))
    web = db.relationship('Web', backref='branding')


    def serialize(self):
        return {
            "id": self.id,
            "color_bg1": self.color_bg1,
            "color_bg2": self.color_bg2,
            "color_font1": self.color_font1,
            "color_hover1": self.color_hover1,
            "logo": self.logo,
            "logo_favicon": self.logo_favicon,
            "font": self.font,
            "brand_name": self.brand_name
        }

class Content(db.Model):
    __tablename__ = 'content'
    id = db.Column(db.Integer, primary_key=True)
    phone_number = db.Column(db.Integer, unique=False, nullable=False)
    instagram = db.Column(db.String(100), unique=False, nullable=True)
    twitter = db.Column(db.String(100), unique=False, nullable=True)
    facebook = db.Column(db.String(100), unique=False, nullable=True)
    location_street = db.Column(db.String(100), unique=False, nullable=True)
    location_city = db.Column(db.String(100), unique=False, nullable=True)
    location_coordinates = db.Column(db.String(25), unique=False, nullable=True)
    image_link = db.Column(db.String(200), unique=False, nullable=False)
    web_id = db.Column(db.Integer, db.ForeignKey('web.id'))
    web = db.relationship('Web', backref='content')

    def serialize(self):
        return {
            "id": self.id,
            "phone_number": self.phone_number,
            "instagram": self.instagram,
            "twitter": self.twitter,
            "facebook": self.facebook,
            "location_street": self.location_street,
            "location_city": self.location_city,
            "location_coordinates": self.location_coordinates,
            "image_link": self.image_link
        }

class Food_category(db.Model):
    __tablename__ = 'category'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), unique=False, nullable=False)
    web_id = db.Column(db.Integer, db.ForeignKey('web.id'))
    web = db.relationship('Web', backref='category')

    def __repr__(self):
        return f'{self.name}'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name
        }

class Allergens(db.Model):
    __tablename__ = 'allergens'
    id = db.Column(db.Integer, primary_key=True)
    food_id = db.Column(db.Integer, db.ForeignKey('food.id'))
    egg = db.Column(db.Boolean, unique=False, default=False)
    fish = db.Column(db.Boolean, unique=False, default=False)
    peanuts = db.Column(db.Boolean, unique=False, default=False)
    soja = db.Column(db.Boolean, unique=False, default=False)
    dairy = db.Column(db.Boolean, unique=False, default=False)
    nuts = db.Column(db.Boolean, unique=False, default=False)
    celery = db.Column(db.Boolean, unique=False, default=False)
    mustard = db.Column(db.Boolean, unique=False, default=False)
    sesame = db.Column(db.Boolean, unique=False, default=False)
    sulphites = db.Column(db.Boolean, unique=False, default=False)
    mollusks = db.Column(db.Boolean, unique=False, default=False)
    lupines = db.Column(db.Boolean, unique=False, default=False)
    gluten = db.Column(db.Boolean, unique=False, default=False)
    crustaceans = db.Column(db.Boolean, unique=False, default=False)
    food = db.relationship("Food", backref='allergens')

    def serialize(self):
        return{
            "id": self.id,
            "egg": self.egg,
            "fish": self.fish,
            "peanuts": self.peanuts,
            "soja": self.soja,
            "dairy": self.dairy,
            "nuts": self.nuts,
            "celery": self.celery,
            "mustard": self.mustard,
            "sesame": self.sesame,
            "sulphites": self.sulphites,
            "mollusks": self.mollusks,
            "lupines": self.lupines,
            "gluten": self.gluten,
            "crustaceans": self.crustaceans 
        }

class Food(db.Model):
    __tablename__ = 'food'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), unique=False, nullable=False)
    description = db.Column(db.String(250), unique=False, nullable=False)
    price = db.Column(db.String(20), unique=False, nullable=False)
    image = db.Column(db.String(200), unique=False, nullable=True)
    category_id = db.Column(db.Integer, db.ForeignKey('category.id'))
    category = db.relationship('Food_category', backref='food')
    web_id = db.Column(db.Integer, db.ForeignKey('web.id'))
    web = db.relationship('Web', backref='food')

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "description": self.description,
            "price": self.price,
            "image": self.image,
            "category": self.category
        }
