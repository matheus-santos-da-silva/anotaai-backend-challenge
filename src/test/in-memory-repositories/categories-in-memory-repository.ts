import { Category } from '../../domain/category/category.entity';
import { CreateCategoryDTO } from '../../domain/category/dtos/create-category-dto';
import { UpdateCategoryDTO } from '../../domain/category/dtos/update-category-dto';
import { CategoriesRepositoryProtocol } from '../../repositories/categories/protocols/categories-repository-protocol';

export class CategoriesInMemoryRepository
  implements CategoriesRepositoryProtocol
{
  categories: Category[] = [];

  async create(data: CreateCategoryDTO): Promise<Category> {
    this.categories.push(data);
    return data;
  }

  async getAll(): Promise<Category[]> {
    return this.categories;
  }

  async getById(id: string): Promise<Category> {
    const category = this.categories.find((category) => category.id === id);
    return category;
  }

  async update(id: string, data: UpdateCategoryDTO): Promise<Category> {
    for (const category of this.categories) {
      if (category.id === id) {
        Object.assign(category, data);
      }
    }

    const category = this.categories.find((category) => category.id === id);
    return category;
  }

  async delete(id: string): Promise<void> {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    for (const category of this.categories) {
      const index = this.categories.findIndex((category) => category.id === id);
      this.categories.splice(index, 1);
    }
  }
}
