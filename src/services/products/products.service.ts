import { Injectable, NotFoundException } from '@nestjs/common';
import { ProductsServiceProtocol } from './protocols/products-service-protocol';
import { CreateProductDTO } from '../../domain/product/dtos/create-product-dto';
import { Product } from '../../domain/product/product.entity';
import { ProductsRepository } from '../../repositories/products/products-repository';
import { CategoriesService } from '../categories/categories.service';
import { UpdateProductDTO } from 'src/domain/product/dtos/update-product-dto';

@Injectable()
export class ProductsService implements ProductsServiceProtocol {
  constructor(
    private readonly productsRepository: ProductsRepository,
    private readonly categoriesService: CategoriesService,
  ) {}

  async getById(id: string): Promise<Product> {
    const product = await this.productsRepository.getById(id);
    if (!product) throw new NotFoundException('Product was not found');
    return product;
  }

  async update(id: string, data: UpdateProductDTO): Promise<Product> {
    await this.getById(id);
    await this.categoriesService.getById(data.categoryId);
    const product = await this.productsRepository.update(id, data);
    return product;
  }

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
