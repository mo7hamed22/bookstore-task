import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateBookDto {
    @ApiProperty()
    @IsNotEmpty()
    title: string;
    @ApiProperty()
    @IsNotEmpty()
    authorId: number;
    @ApiProperty()
    @IsNotEmpty()
    categoryId: number;
    @ApiProperty()
    @IsNotEmpty()
    price: number;
}
