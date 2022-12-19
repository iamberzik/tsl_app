from tortoise.contrib.pydantic import pydantic_model_creator

from models import Users

User_Pydantic = pydantic_model_creator(Users, name="User", exclude=('password_hash',))
UserPassword_Pydantic = pydantic_model_creator(Users, name="UserPass", include=('password_hash',))
UserIn_Pydantic = pydantic_model_creator(Users, name="UserIn", exclude=('id', 'password_hash'), exclude_readonly=True)
