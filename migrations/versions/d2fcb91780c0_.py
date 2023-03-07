"""empty message

Revision ID: d2fcb91780c0
Revises: 
Create Date: 2023-03-05 03:15:34.895617

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'd2fcb91780c0'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('user',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.Column('name', sa.String(length=50), nullable=False),
    sa.Column('lastname', sa.String(length=50), nullable=False),
    sa.Column('password', sa.String(length=200), nullable=False),
    sa.Column('avatar', sa.String(length=200), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email')
    )
    op.create_table('web',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=50), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('name')
    )
    op.create_table('branding',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('color_bg1', sa.String(length=100), nullable=False),
    sa.Column('color_bg2', sa.String(length=100), nullable=False),
    sa.Column('color_font1', sa.String(length=100), nullable=False),
    sa.Column('color_font2', sa.String(length=100), nullable=False),
    sa.Column('color_hover1', sa.String(length=100), nullable=False),
    sa.Column('logo', sa.String(length=200), nullable=False),
    sa.Column('logo_favicon', sa.String(length=200), nullable=False),
    sa.Column('font', sa.String(length=200), nullable=False),
    sa.Column('brand_name', sa.String(length=100), nullable=False),
    sa.Column('web_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['web_id'], ['web.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('logo'),
    sa.UniqueConstraint('logo_favicon')
    )
    op.create_table('category',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=100), nullable=False),
    sa.Column('web_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['web_id'], ['web.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('content',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('phone_number', sa.Integer(), nullable=False),
    sa.Column('instagram', sa.String(length=100), nullable=True),
    sa.Column('twitter', sa.String(length=100), nullable=True),
    sa.Column('facebook', sa.String(length=100), nullable=True),
    sa.Column('location_street', sa.String(length=100), nullable=True),
    sa.Column('location_city', sa.String(length=100), nullable=True),
    sa.Column('location_coordinates', sa.String(length=25), nullable=True),
    sa.Column('image_link', sa.String(length=200), nullable=False),
    sa.Column('web_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['web_id'], ['web.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('food',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=100), nullable=False),
    sa.Column('description', sa.String(length=250), nullable=False),
    sa.Column('price', sa.String(length=20), nullable=False),
    sa.Column('image', sa.String(length=200), nullable=True),
    sa.Column('category_id', sa.Integer(), nullable=True),
    sa.Column('web_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['category_id'], ['category.id'], ),
    sa.ForeignKeyConstraint(['web_id'], ['web.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('allergens',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('food_id', sa.Integer(), nullable=True),
    sa.Column('egg', sa.Boolean(), nullable=True),
    sa.Column('fish', sa.Boolean(), nullable=True),
    sa.Column('peanuts', sa.Boolean(), nullable=True),
    sa.Column('soja', sa.Boolean(), nullable=True),
    sa.Column('dairy', sa.Boolean(), nullable=True),
    sa.Column('nuts', sa.Boolean(), nullable=True),
    sa.Column('celery', sa.Boolean(), nullable=True),
    sa.Column('mustard', sa.Boolean(), nullable=True),
    sa.Column('sesame', sa.Boolean(), nullable=True),
    sa.Column('sulphites', sa.Boolean(), nullable=True),
    sa.Column('mollusks', sa.Boolean(), nullable=True),
    sa.Column('lupines', sa.Boolean(), nullable=True),
    sa.Column('gluten', sa.Boolean(), nullable=True),
    sa.Column('crustaceans', sa.Boolean(), nullable=True),
    sa.ForeignKeyConstraint(['food_id'], ['food.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('allergens')
    op.drop_table('food')
    op.drop_table('content')
    op.drop_table('category')
    op.drop_table('branding')
    op.drop_table('web')
    op.drop_table('user')
    # ### end Alembic commands ###
