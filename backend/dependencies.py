import bcrypt
from fastapi.security import OAuth2PasswordBearer, HTTPBasic

security = HTTPBasic()

salt = bcrypt.gensalt(prefix=b'2b')
