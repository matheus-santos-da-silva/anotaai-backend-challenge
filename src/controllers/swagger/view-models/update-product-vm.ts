import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateProductVM {
  @ApiProperty({ example: 'update-product-title' })
  @IsString()
  @IsOptional()
  title: string;

  @ApiProperty({ example: 'a8202e9e-a1da-48df-b64d-81789128cb73' })
  @IsString()
  @IsOptional()
  categoryId: string;

  @ApiProperty({ example: 2100 })
  @IsNumber()
  @IsOptional()
  price: number;

  @ApiProperty({ example: 'update-product-description' })
  @IsString()
  @IsOptional()
  description: string;
}
