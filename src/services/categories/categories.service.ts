import { Injectable, NotFoundException } from '@nestjs/common';
import { CategoriesRepository } from '../../repositories/categories/categories-repository';
import { CategoriesServiceProtocol } from './protocols/categories-service-protocol';
import { Category } from '../../domain/category/category.entity';
import { CreateCategoryDTO } from '../../domain/category/dtos/create-category-dto';

@Injectable()
export class CategoriesService implements CategoriesServiceProtocol {
  constructor(private readonly categoriesRepository: CategoriesRepository) {}

  async getById(id: string): Promise<Category> {
    const category = await this.categoriesRepository.getById(id);
    if (!category) throw new NotFoundException('Category was not found');
    return category;
  }

  async getAll(): Promise<Category[]> {
    const categories = await this.categoriesRepository.getAll();
    return categories;
  }

  async create(data: CreateCategoryDTO): Promise<Category> {
    const category = await this.categoriesRepository.create(data);
    return category;
  }
}
