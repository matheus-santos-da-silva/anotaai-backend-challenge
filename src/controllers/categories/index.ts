import { CreateCategoryController } from './create-category.controller';
import { DeleteCategoryController } from './delete-category.controller';
import { GetAllCategoriesController } from './get-all-categories.controller';
import { GetCategoryByIdController } from './get-category-by-id.controller';
import { UpdateCategoryController } from './update-category.controller';

export const CategoriesControllers = [
  CreateCategoryController,
  GetAllCategoriesController,
  GetCategoryByIdController,
  UpdateCategoryController,
  DeleteCategoryController,
];
