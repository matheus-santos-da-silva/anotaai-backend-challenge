import { ApiProperty } from '@nestjs/swagger';
import { Category } from '../../../domain/category/category.entity';

export class CategoryResponseViewModel {
  @ApiProperty({ example: 'a7f02e9e-a1da-48df-b64d-81789128cb73' })
  public id: string;

  @ApiProperty({ example: 'category-title' })
  public title: string;

  @ApiProperty({ example: '1' })
  public ownerId: string;

  @ApiProperty({ example: 'category-description' })
  public description: string;

  constructor(id: string, title: string, ownerId: string, description: string) {
    this.id = id;
    this.title = title;
    this.ownerId = ownerId;
    this.description = description;
  }

  static toViewModel({
    id,
    title,
    ownerId,
    description,
  }: Category): CategoryResponseViewModel {
    return new CategoryResponseViewModel(id, title, ownerId, description);
  }
}
