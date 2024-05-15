import { Injectable } from '@nestjs/common';
import { ProductsServiceProtocol } from './protocols/products-service-protocol';
import { CreateProductDTO } from '../../domain/product/dtos/create-product-dto';
import { Product } from '../../domain/product/product.entity';
import { ProductsRepository } from '../../repositories/product/products-repository';
import { CategoriesService } from '../categories/categories.service';

@Injectable()
export class ProductsService implements ProductsServiceProtocol {
  constructor(
    private readonly productsRepository: ProductsRepository,
    private readonly categoriesService: CategoriesService,
  ) {}

  async getAll(): Promise<Product[]> {
    const products = await this.productsRepository.getAll();
    return products;
  }

  async create(data: CreateProductDTO): Promise<Product> {
    await this.categoriesService.getById(data.categoryId);
    const product = await this.productsRepository.create(data);
    return product;
  }
}
