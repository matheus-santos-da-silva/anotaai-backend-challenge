import { Category } from '../../../domain/category/category.entity';
import { CreateCategoryDTO } from '../../../domain/category/dtos/create-category-dto';

export abstract class CategoriesRepositoryProtocol {
  abstract create(data: CreateCategoryDTO): Promise<Category>;
  abstract getAll(): Promise<Category[]>;
  abstract getById(id: string): Promise<Category>;
}
