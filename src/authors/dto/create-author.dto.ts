import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty } from "class-validator";

export class CreateAuthorDto {
    @ApiProperty()
    @IsNotEmpty()
    name: string;
    @ApiProperty()
    @IsNotEmpty()
    dob: Date;
    @ApiProperty()
    @IsNotEmpty()
    @IsEmail({}, { message: 'Invalid email'})
    email: string;  
}
