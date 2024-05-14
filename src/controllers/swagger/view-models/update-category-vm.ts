import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateCategoryVM {
  @ApiProperty({ example: 'update-category-title' })
  @IsString()
  @IsOptional()
  title: string;

  @ApiProperty({ example: 'update-category-description' })
  @IsString()
  @IsOptional()
  description: string;
}
