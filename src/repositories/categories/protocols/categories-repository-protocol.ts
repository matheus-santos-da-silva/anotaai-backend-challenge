import { UpdateCategoryDTO } from 'src/domain/category/dtos/update-category-dto';
import { Category } from '../../../domain/category/category.entity';
import { CreateCategoryDTO } from '../../../domain/category/dtos/create-category-dto';

export abstract class CategoriesRepositoryProtocol {
  abstract create(data: CreateCategoryDTO): Promise<Category>;
  abstract getAll(): Promise<Category[]>;
  abstract getById(id: string): Promise<Category>;
  abstract update(id: string, data: UpdateCategoryDTO): Promise<Category>;
}
