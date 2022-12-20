from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware
from tortoise.contrib.fastapi import register_tortoise

from security import handlers as security_handlers
from users import handlers as users_handlers

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.router.prefix = '/api/v1'

app.include_router(users_handlers.router)
app.include_router(security_handlers.router)

register_tortoise(
    app,
    db_url="sqlite://db.sqlite3",
    modules={"models": ["users.models"]},
    generate_schemas=True,
    add_exception_handlers=True,
)
