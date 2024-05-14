import { Controller, Get, Param } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { HttpNotFoundError } from '../swagger/http-errors';
import { CategoriesService } from '../../services/categories/categories.service';
import { CategoryResponseViewModel } from '../swagger/view-models';

@ApiTags('Categories')
@Controller('api/categories')
export class GetCategoryByIdController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @ApiOperation({ summary: 'Get Category By Id' })
  @ApiResponse({
    status: 200,
    description: 'Success',
    type: CategoryResponseViewModel,
  })
  @ApiResponse(HttpNotFoundError)
  @ApiParam({ name: 'id', type: String })
  @Get(':id')
  async execute(@Param('id') id: string): Promise<CategoryResponseViewModel> {
    const category = await this.categoriesService.getById(id);

    return CategoryResponseViewModel.toViewModel(category);
  }
}
