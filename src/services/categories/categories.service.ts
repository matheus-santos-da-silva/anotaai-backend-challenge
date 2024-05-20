import { Injectable, NotFoundException } from '@nestjs/common';
import { CategoriesRepository } from '../../repositories/categories/categories-repository';
import { CategoriesServiceProtocol } from './protocols/categories-service-protocol';
import { Category } from '../../domain/category/category.entity';
import { CreateCategoryDTO } from '../../domain/category/dtos/create-category-dto';
import { UpdateCategoryDTO } from '../../domain/category/dtos/update-category-dto';
import { AwsSnsService } from '../aws/aws-sns.service';
import { AWS_SNS_TOPIC_ARN } from '../../env';

@Injectable()
export class CategoriesService implements CategoriesServiceProtocol {
  constructor(
    private readonly categoriesRepository: CategoriesRepository,
    private readonly awsSnsService: AwsSnsService,
  ) {}

  async getById(id: string): Promise<Category> {
    const category = await this.categoriesRepository.getById(id);
    if (!category) throw new NotFoundException('Category was not found');
    return category;
  }

  async delete(id: string): Promise<void> {
    await this.getById(id);
    await this.categoriesRepository.delete(id);
  }

  async update(id: string, data: UpdateCategoryDTO): Promise<Category> {
    await this.getById(id);
    const updatedCategory = await this.categoriesRepository.update(id, data);
    await this.awsSnsService.publishMessage({
      message: JSON.stringify({ type: 'category', ...updatedCategory }),
      topicArn: AWS_SNS_TOPIC_ARN,
    });
    return updatedCategory;
  }

  async getAll(): Promise<Category[]> {
    const categories = await this.categoriesRepository.getAll();
    return categories;
  }

  async create(data: CreateCategoryDTO): Promise<Category> {
    const category = await this.categoriesRepository.create(data);
    await this.awsSnsService.publishMessage({
      message: JSON.stringify({ type: 'category', ...category }),
      topicArn: AWS_SNS_TOPIC_ARN,
    });
    return category;
  }
}
