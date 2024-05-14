import { CreateCategoryDTO } from '../../../domain/category/dtos/create-category-dto';
import { Category } from '../../../domain/category/category.entity';

export abstract class CategoriesServiceProtocol {
  abstract create(data: CreateCategoryDTO): Promise<Category>;
  abstract getAll(): Promise<Category[]>;
  abstract getById(id: string): Promise<Category>;
}
