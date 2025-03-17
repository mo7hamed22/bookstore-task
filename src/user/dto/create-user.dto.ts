import { ApiProperty } from "@nestjs/swagger"
import { IsEmail, IsIn, IsNotEmpty } from "class-validator"

export class AuthCredentialsDto {
    @ApiProperty({default:'m.m@gmail.com'})
    @IsEmail({}, { message: 'Invalid email'})
    @IsNotEmpty()
    email: string;
  
    @ApiProperty()
    @IsNotEmpty()
    password: string;
  }
  
  export class CreateUserDto extends AuthCredentialsDto {
    @ApiProperty()
    @IsNotEmpty()
    username: string;
    @ApiProperty()
    @IsNotEmpty()
    @IsIn(['admin', 'user'])
    role: string;
  }
  
  export class loginUserDto extends AuthCredentialsDto {}
