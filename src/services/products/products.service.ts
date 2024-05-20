import { Injectable, NotFoundException } from '@nestjs/common';
import { ProductsServiceProtocol } from './protocols/products-service-protocol';
import { CreateProductDTO } from '../../domain/product/dtos/create-product-dto';
import { Product } from '../../domain/product/product.entity';
import { ProductsRepository } from '../../repositories/products/products-repository';
import { CategoriesService } from '../categories/categories.service';
import { UpdateProductDTO } from 'src/domain/product/dtos/update-product-dto';
import { AwsSnsService } from '../aws/aws-sns.service';
import { AWS_SNS_TOPIC_ARN } from 'src/env';

@Injectable()
export class ProductsService implements ProductsServiceProtocol {
  constructor(
    private readonly productsRepository: ProductsRepository,
    private readonly categoriesService: CategoriesService,
    private readonly awsSnsService: AwsSnsService,
  ) {}

  async getById(id: string): Promise<Product> {
    const product = await this.productsRepository.getById(id);
    if (!product) throw new NotFoundException('Product was not found');
    return product;
  }

  async delete(id: string): Promise<void> {
    const product = await this.getById(id);
    await this.productsRepository.delete(id);
    await this.awsSnsService.publishMessage({
      message: JSON.stringify({
        type: 'delete-product',
        ownerId: product.ownerId,
        productId: id,
      }),
      topicArn: AWS_SNS_TOPIC_ARN,
    });
  }

  async update(id: string, data: UpdateProductDTO): Promise<Product> {
    await this.getById(id);
    await this.categoriesService.getById(data.categoryId);
    const product = await this.productsRepository.update(id, data);
    await this.awsSnsService.publishMessage({
      message: JSON.stringify({ type: 'product', ...product }),
      topicArn: AWS_SNS_TOPIC_ARN,
    });
    return product;
  }

  async getAll(): Promise<Product[]> {
    const products = await this.productsRepository.getAll();
    return products;
  }

  async create(data: CreateProductDTO): Promise<Product> {
    await this.categoriesService.getById(data.categoryId);
    const product = await this.productsRepository.create(data);
    await this.awsSnsService.publishMessage({
      message: JSON.stringify({ type: 'product', ...product }),
      topicArn: AWS_SNS_TOPIC_ARN,
    });
    return product;
  }
}
