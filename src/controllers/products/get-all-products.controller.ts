import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ProductResponseViewModel } from '../swagger/view-models';
import { ProductsService } from '../../services/products/products.service';

@ApiTags('Products')
@Controller('api/products')
export class GetAllProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @ApiOperation({ summary: 'Get All Products' })
  @ApiResponse({
    status: 200,
    description: 'Success',
    type: ProductResponseViewModel,
    isArray: true,
  })
  @Get()
  async execute(): Promise<ProductResponseViewModel[]> {
    const products = await this.productsService.getAll();

    const payload: ProductResponseViewModel[] = [];
    for (const product of products) {
      payload.push(ProductResponseViewModel.toViewModel(product));
    }

    return payload;
  }
}
