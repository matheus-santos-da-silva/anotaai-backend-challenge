import { Controller, Delete, Param } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { HttpNotFoundError } from '../swagger/http-errors';
import { CategoriesService } from '../../services/categories/categories.service';

@ApiTags('Categories')
@Controller('api/categories')
export class DeleteCategoryController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @ApiOperation({ summary: 'Delete Category' })
  @ApiResponse({
    status: 200,
    description: 'Success',
  })
  @ApiResponse(HttpNotFoundError)
  @ApiParam({ name: 'id', type: String })
  @Delete(':id')
  async execute(@Param('id') id: string): Promise<void> {
    await this.categoriesService.delete(id);
  }
}
