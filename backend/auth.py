from fastapi import APIRouter, Depends, HTTPException
from fastapi.security import HTTPBasicCredentials

from dependencies import security
from schemas import User_Pydantic
from utils import authenticate_user

router = APIRouter()


@router.post("/login", response_model=User_Pydantic)
async def auth_user(credentials: HTTPBasicCredentials = Depends(security)):
    user = await authenticate_user(credentials.username, credentials.password)
    if not user:
        raise HTTPException(status_code=401, detail="Incorrect email or password")
    return user
