import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from '../../domain/category/category.entity';
import { Repository } from 'typeorm';
import { CategoriesRepositoryProtocol } from './protocols/categories-repository-protocol';
import { CreateCategoryDTO } from 'src/domain/category/dtos/create-category-dto';

@Injectable()
export class CategoriesRepository implements CategoriesRepositoryProtocol {
  constructor(
    @InjectRepository(Category)
    private readonly typeOrmRepository: Repository<Category>,
  ) {}

  async getAll(): Promise<Category[]> {
    const categories = await this.typeOrmRepository.find();
    return categories;
  }

  async create(data: CreateCategoryDTO): Promise<Category> {
    const newCategory = await this.typeOrmRepository.save(data);
    return newCategory;
  }
}
