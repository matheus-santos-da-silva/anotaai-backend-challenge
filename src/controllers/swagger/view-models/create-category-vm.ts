import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCategoryVM {
  @ApiProperty({ example: 'category-title' })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({ example: '1' })
  @IsString()
  @IsNotEmpty()
  ownerId: string;

  @ApiProperty({ example: 'category-description' })
  @IsString()
  @IsNotEmpty()
  description: string;
}
