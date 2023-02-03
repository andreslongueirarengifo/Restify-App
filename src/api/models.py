from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'user'
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    name = db.Column(db.String(50), unique=True, nullable=False)
    lastname = db.Column(db.String(50), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)

    def __repr__(self):
        return f'{self.name}-{self.lastname}-{self.email}'

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
    phone_number = db.Column(db.Integer, unique=True, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    user = db.relationship('User', backref='web')

    def __repr__(self):
        return f'{self.name}-{self.phone_number}'

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
    color_font1 = db.Column(db.String(100), unique=False, nullable=False)
    color_hover1 = db.Column(db.String(100), unique=False, nullable=False)
    logo = db.Column(db.String(200), unique=True, nullable=False)
    logo_favicon = db.Column(db.String(200), unique=True, nullable=False)
    font = db.Column(db.String(200), unique=False, nullable=False)
    brand_name = db.Column(db.String(100), unique=True, nullable=False)
    web_id = db.Column(db.Integer, db.ForeignKey('web.id'))
    web = db.relationship('Web', backref='branding')

    def serialize(self):
        return {
            "id": self.id,
            "color": self.color,
            "logo": self.logo,
            "logo_favicon": self.logo_favicon,
            "font": self.font,
            "brand_name": self.brand_name
        }

class Content(db.Model):
    __tablename__ = 'content'
    id = db.Column(db.Integer, primary_key=True)
    description = db.Column(db.String(500), unique=False, nullable=False)
    instagram = db.Column(db.String(100), unique=True, nullable=True)
    twitter = db.Column(db.String(100), unique=True, nullable=True)
    facebook = db.Column(db.String(100), unique=True, nullable=True)
    tiktok = db.Column(db.String(100), unique=True, nullable=True)
    location = db.Column(db.String(100), unique=True, nullable=True)
    header = db.Column(db.String(200), unique=True, nullable=False)
    web_id = db.Column(db.Integer, db.ForeignKey('web.id'))
    web = db.relationship('Web', backref='content')

    def serialize(self):
        return {
            "id": self.id,
            "description": self.color,
            "header": self.logo
        }

class Food_category(db.Model):
    __tablename__ = 'category'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), unique=True, nullable=False)
    web_id = db.Column(db.Integer, db.ForeignKey('web.id'))
    web = db.relationship('Web', backref='category')

    def __repr__(self):
        return f'{self.name}'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name
        }

class Food(db.Model):
    __tablename__ = 'food'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), unique=False, nullable=False)
    description = db.Column(db.String(250), unique=False, nullable=False)
    allergens = db.Column(db.String(250), unique=False, nullable=False)
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
            "image": self.image,
            "category": self.category
        }

