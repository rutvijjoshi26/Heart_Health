from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles

from user_auth.config import settings
from router import auth, user, patient

app = FastAPI()
app.mount("/static",StaticFiles(directory="static"),name="static")

origins = [
    settings.CLIENT_ORIGIN,
    "*"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.mount("/static",StaticFiles(directory="static"),name="static")
app.include_router(auth.router, tags=['Auth'], prefix='/api/auth')
app.include_router(user.router, tags=['Users'], prefix='/api/users')
app.include_router(patient.router, tags=['Patient'], prefix='/api/patient')


@app.get("/api/")
def root():
    return {"message": "Welcome to FastAPI with MongoDB"}

