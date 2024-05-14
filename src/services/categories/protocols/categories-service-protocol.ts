import { CreateCategoryDTO } from '../../../domain/category/dtos/create-category-dto';
import { Category } from '../../../domain/category/category.entity';
import { UpdateCategoryDTO } from '../../../domain/category/dtos/update-category-dto';

export abstract class CategoriesServiceProtocol {
  abstract create(data: CreateCategoryDTO): Promise<Category>;
  abstract getAll(): Promise<Category[]>;
  abstract getById(id: string): Promise<Category>;
  abstract update(id: string, data: UpdateCategoryDTO): Promise<Category>;
  abstract delete(id: string): Promise<void>;
}
