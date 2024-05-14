import { Body, Controller, Param, Patch } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { HttpNotFoundError } from '../swagger/http-errors';
import { CategoriesService } from '../../services/categories/categories.service';
import { CategoryResponseViewModel } from '../swagger/view-models';
import { UpdateCategoryVM } from '../swagger/view-models/update-category-vm';

@ApiTags('Categories')
@Controller('api/categories')
export class UpdateCategoryController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @ApiOperation({ summary: 'Update Category' })
  @ApiResponse({
    status: 200,
    description: 'Success',
    type: CategoryResponseViewModel,
  })
  @ApiResponse(HttpNotFoundError)
  @ApiParam({ name: 'id', type: String })
  @Patch(':id')
  async execute(
    @Param('id') id: string,
    @Body() data: UpdateCategoryVM,
  ): Promise<CategoryResponseViewModel> {
    const updatedCategory = await this.categoriesService.update(id, data);

    return CategoryResponseViewModel.toViewModel(updatedCategory);
  }
}
