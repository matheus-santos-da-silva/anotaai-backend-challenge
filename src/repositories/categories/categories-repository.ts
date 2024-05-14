import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from '../../domain/category/category.entity';
import { Repository } from 'typeorm';
import { CategoriesRepositoryProtocol } from './protocols/categories-repository-protocol';
import { CreateCategoryDTO } from '../../domain/category/dtos/create-category-dto';
import { UpdateCategoryDTO } from '../../domain/category/dtos/update-category-dto';

@Injectable()
export class CategoriesRepository implements CategoriesRepositoryProtocol {
  constructor(
    @InjectRepository(Category)
    private readonly typeOrmRepository: Repository<Category>,
  ) {}

  async delete(id: string): Promise<void> {
    await this.typeOrmRepository.delete(id);
  }

  async getById(id: string): Promise<Category> {
    const category = await this.typeOrmRepository.findOne({ where: { id } });
    return category;
  }

  async update(id: string, data: UpdateCategoryDTO): Promise<Category> {
    await this.typeOrmRepository.update(id, data);
    const updatedCategory = await this.typeOrmRepository.findOne({
      where: { id },
    });
    return updatedCategory;
  }

  async getAll(): Promise<Category[]> {
    const categories = await this.typeOrmRepository.find();
    return categories;
  }

  async create(data: CreateCategoryDTO): Promise<Category> {
    const newCategory = await this.typeOrmRepository.save(data);
    return newCategory;
  }
}
