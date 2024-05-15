import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateProductVM {
  @ApiProperty({ example: 'product-title' })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({ example: '1' })
  @IsString()
  @IsNotEmpty()
  ownerId: string;

  @ApiProperty({ example: 'a8202e9e-a1da-48df-b64d-81789128cb73' })
  @IsString()
  @IsNotEmpty()
  categoryId: string;

  @ApiProperty({ example: 'category-description' })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({ example: 2000 })
  @IsNumber()
  @IsNotEmpty()
  price: number;
}
