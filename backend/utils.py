import bcrypt

from models import Users
from schemas import User_Pydantic, UserPassword_Pydantic


async def verify_password(password, password_hash):
    return bcrypt.checkpw(password, password_hash)


async def authenticate_user(email: str, password: str):
    user = await UserPassword_Pydantic.from_queryset_single(Users.get(email=email))

    if not user:
        return False

    if not verify_password(password, user.password_hash):
        return False

    return await User_Pydantic.from_queryset_single(Users.get(email=email))
