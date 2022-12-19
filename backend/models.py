from tortoise import fields, models


class Users(models.Model):
    """
    User model
    """

    name = fields.CharField(max_length=50)
    email = fields.CharField(max_length=50, unique=True)
    phone = fields.CharField(max_length=30, unique=True)
    country = fields.CharField(max_length=50)
    age = fields.IntField()
    password_hash = fields.CharField(max_length=128)
