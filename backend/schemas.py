from datetime import datetime
from pydantic import BaseModel, EmailStr, constr


class UserBaseSchema(BaseModel):
    name: str
    email: str
    phone_number: int
    role: str 
    identification_number : str
    created_at: datetime 
    updated_at: datetime 

    class Config:
        orm_mode = True


class CreateUserSchema(UserBaseSchema):
    password: constr(min_length=8)
    passwordConfirm: str
    verified: bool = False


class LoginUserSchema(BaseModel):
    email: EmailStr
    password: constr(min_length=8)


class UserResponseSchema(UserBaseSchema):
    id: str
    pass


class UserResponse(BaseModel):
    status: str
    user: UserResponseSchema

class Patient(BaseModel):
    identification_number : str
    patient_name: str
    age: int
    gender: str
    address: str
    phone: str
    doctor_name: str
    technician_name: str
    chest_xray: str
    annotated_img: str
    report: list
    comment: str
