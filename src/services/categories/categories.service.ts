import { Injectable } from '@nestjs/common';
import { CategoriesRepository } from '../../repositories/categories/categories-repository';
import { CategoriesServiceProtocol } from './protocols/categories-service-protocol';
import { Category } from 'src/domain/category/category.entity';
import { CreateCategoryDTO } from 'src/domain/category/dtos/create-category-dto';

@Injectable()
export class CategoriesService implements CategoriesServiceProtocol {
  constructor(private readonly categoriesRepository: CategoriesRepository) {}

  async create(data: CreateCategoryDTO): Promise<Category> {
    const category = await this.categoriesRepository.create(data);
    return category;
  }
}
