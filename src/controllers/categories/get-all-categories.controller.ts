import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CategoryResponseViewModel } from '../swagger/view-models';
import { CategoriesService } from '../../services/categories/categories.service';

@ApiTags('Categories')
@Controller('api/categories')
export class GetAllCategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @ApiOperation({ summary: 'Get All Categories' })
  @ApiResponse({
    status: 200,
    description: 'Success',
    type: CategoryResponseViewModel,
    isArray: true,
  })
  @Get()
  async execute(): Promise<CategoryResponseViewModel[]> {
    const categories = await this.categoriesService.getAll();

    const payload: CategoryResponseViewModel[] = [];
    for (const categorie of categories) {
      payload.push(CategoryResponseViewModel.toViewModel(categorie));
    }

    return payload;
  }
}
