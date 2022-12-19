import bcrypt
from fastapi import APIRouter, HTTPException, Depends
from fastapi.security import HTTPBasicCredentials
from tortoise.contrib.fastapi import HTTPNotFoundError

from dependencies import security, salt
from models import Users
from schemas import User_Pydantic, UserIn_Pydantic

router = APIRouter()
router.prefix = '/users'


@router.get("/", response_model=list[User_Pydantic])
async def get_all_users(credentials: HTTPBasicCredentials = Depends(security)):
    return await User_Pydantic.from_queryset(Users.all())


@router.post("/")
async def create_user(user: UserIn_Pydantic, credentials: HTTPBasicCredentials = Depends(security)):
    user_obj = await Users.create(**user.dict(exclude_unset=True), password_hash=bcrypt.hashpw(b"password", salt))
    return await User_Pydantic.from_tortoise_orm(user_obj)


@router.get("/{id}", response_model=User_Pydantic, responses={404: {"model": HTTPNotFoundError}})
async def get_user(id: int, credentials: HTTPBasicCredentials = Depends(security)):
    return await User_Pydantic.from_queryset_single(Users.get(id=id))


@router.put("/{id}", response_model=User_Pydantic, responses={404: {"model": HTTPNotFoundError}})
async def update_user(id: int, user: UserIn_Pydantic, credentials: HTTPBasicCredentials = Depends(security)):
    await Users.filter(id=id).update(**user.dict(exclude_unset=True))
    return await User_Pydantic.from_queryset_single(Users.get(id=id))


@router.delete("/{id}", responses={404: {"model": HTTPNotFoundError}})
async def delete_user(id: int, credentials: HTTPBasicCredentials = Depends(security)):
    deleted_count = await Users.filter(id=id).delete()
    if not deleted_count:
        raise HTTPException(status_code=404, detail=f"User {id} not found")
    return {"message": f"Deleted user {id}"}
