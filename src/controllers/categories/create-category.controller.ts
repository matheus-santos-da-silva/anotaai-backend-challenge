import { Body, Controller, Post } from '@nestjs/common';
import { CategoriesService } from '../../services/categories/categories.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import {
  CategoryResponseViewModel,
  CreateCategoryVM,
} from '../swagger/view-models';
import { HttpBadRequestError } from '../swagger/http-errors';

@ApiTags('Categories')
@Controller('api/categories')
export class CreateCategoryController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @ApiOperation({ summary: 'Create Category' })
  @ApiResponse({
    status: 201,
    description: 'Created',
    type: CategoryResponseViewModel,
  })
  @ApiResponse(HttpBadRequestError)
  @Post('create')
  async create(
    @Body() createCategoryDTO: CreateCategoryVM,
  ): Promise<CategoryResponseViewModel> {
    const category = await this.categoriesService.create(createCategoryDTO);
    return CategoryResponseViewModel.toViewModel(category);
  }
}
