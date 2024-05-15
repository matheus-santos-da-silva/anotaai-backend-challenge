import { Injectable } from '@nestjs/common';
import { ProductsRepositoryProtocol } from './protocols/products-repository-protocol';
import { CreateProductDTO } from '../../domain/product/dtos/create-product-dto';
import { Product } from '../../domain/product/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsRepository implements ProductsRepositoryProtocol {
  constructor(
    @InjectRepository(Product)
    private readonly typeOrmRepository: Repository<Product>,
  ) {}

  async getById(id: string): Promise<Product> {
    const product = await this.typeOrmRepository.findOne({ where: { id } });
    return product;
  }

  async getAll(): Promise<Product[]> {
    const products = await this.typeOrmRepository.find({});
    return products;
  }

  async create(data: CreateProductDTO): Promise<Product> {
    const product = await this.typeOrmRepository.save(data);
    return product;
  }
}