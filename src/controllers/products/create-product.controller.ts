import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import {
  CategoryResponseViewModel,
  CreateProductVM,
} from '../swagger/view-models';
import { HttpBadRequestError, HttpNotFoundError } from '../swagger/http-errors';
import { ProductsService } from '../../services/products/products.service';
import { ProductResponseViewModel } from '../swagger/view-models';

@ApiTags('Products')
@Controller('api/products')
export class CreateProductController {
  constructor(private readonly productsService: ProductsService) {}

  @ApiOperation({ summary: 'Create Product' })
  @ApiResponse({
    status: 201,
    description: 'Created',
    type: CategoryResponseViewModel,
  })
  @ApiResponse(HttpBadRequestError)
  @ApiResponse(HttpNotFoundError)
  @Post('create')
  async create(
    @Body() data: CreateProductVM,
  ): Promise<ProductResponseViewModel> {
    const product = await this.productsService.create(data);
    return ProductResponseViewModel.toViewModel(product);
  }
}
