import { IsBoolean, IsEmail, IsString } from "class-validator";

export class CreateUserDto {
    
@IsEmail()
email: string;


@IsString()
password: string;


@IsBoolean()
active: boolean;
@IsString()
  role: string;
}