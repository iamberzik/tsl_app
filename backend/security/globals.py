import bcrypt
from fastapi.security import HTTPBasic

security_scheme = HTTPBasic()

salt = bcrypt.gensalt(prefix=b'2b')
