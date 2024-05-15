import { Injectable } from '@nestjs/common';
import { ProductsRepositoryProtocol } from './protocols/products-repository-protocol';
import { CreateProductDTO } from '../../domain/product/dtos/create-product-dto';
import { Product } from '../../domain/product/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateProductDTO } from 'src/domain/product/dtos/update-product-dto';

@Injectable()
export class ProductsRepository implements ProductsRepositoryProtocol {
  constructor(
    @InjectRepository(Product)
    private readonly typeOrmRepository: Repository<Product>,
  ) {}

  async delete(id: string): Promise<void> {
    await this.typeOrmRepository.delete(id);
  }

  async update(id: string, data: UpdateProductDTO): Promise<Product> {
    await this.typeOrmRepository.update(id, data);
    const updatedProduct = await this.typeOrmRepository.findOne({
      where: { id },
    });
    return updatedProduct;
  }

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
