  
import os
from flask_admin import Admin
from .models import db, User, Web, Branding, Content, Food, Allergens, Food_category
from flask_admin.contrib.sqla import ModelView

def setup_admin(app):
    app.secret_key = os.environ.get('FLASK_APP_KEY', 'sample key')
    app.config['FLASK_ADMIN_SWATCH'] = 'cerulean'
    admin = Admin(app, name='4Geeks Admin', template_mode='bootstrap3')

    
    # Add your models here, for example this is how we add a the User model to the admin
    admin.add_view(ModelView(User, db.session))
    admin.add_view(ModelView(Web, db.session))
    admin.add_view(ModelView(Branding, db.session))
    admin.add_view(ModelView(Content, db.session))
    admin.add_view(ModelView(Food, db.session))
    admin.add_view(ModelView(Allergens, db.session))
    admin.add_view(ModelView(Food_category, db.session))

    # You can duplicate that line to add mew models
    # admin.add_view(ModelView(YourModelName, db.session))