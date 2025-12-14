
import { IsBoolean, IsEmail, IsOptional, IsString, MinLength } from 'class-validator';
import { CreateUserDto } from './create-user.dto';
import { PartialType } from '@nestjs/mapped-types';

export class updateUserDto extends PartialType(CreateUserDto) {
   @IsEmail()
   @IsOptional()
   email: string;

   @IsString()
   @IsOptional()
   password: string;

   @IsBoolean()
   @IsOptional()
   active: boolean;

  
}