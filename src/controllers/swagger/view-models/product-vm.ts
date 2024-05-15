import { ApiProperty } from '@nestjs/swagger';
import { Product } from '../../../domain/product/product.entity';

export class ProductResponseViewModel {
  @ApiProperty({ example: 'a7f02e9e-a1da-48df-b64d-81789128cb73' })
  public id: string;

  @ApiProperty({ example: 'category-title' })
  public title: string;

  @ApiProperty({ example: '1' })
  public ownerId: string;

  @ApiProperty({ example: 'a8202e9e-a1da-48df-b64d-81789128cb73' })
  public categoryId: string;

  @ApiProperty({ example: 'category-description' })
  public description: string;

  @ApiProperty({ example: 2000 })
  public price: number;

  constructor(
    id: string,
    title: string,
    ownerId: string,
    categoryId: string,
    description: string,
    price: number,
  ) {
    this.id = id;
    this.title = title;
    this.ownerId = ownerId;
    this.categoryId = categoryId;
    this.description = description;
    this.price = price;
  }

  static toViewModel({
    id,
    title,
    ownerId,
    categoryId,
    description,
    price,
  }: Product): ProductResponseViewModel {
    return new ProductResponseViewModel(
      id,
      title,
      ownerId,
      categoryId,
      description,
      price,
    );
  }
}
