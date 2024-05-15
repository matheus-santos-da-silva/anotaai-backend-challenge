import { Controller, Get, Param } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { HttpNotFoundError } from '../swagger/http-errors';
import { ProductsService } from '../../services/products/products.service';
import { ProductResponseViewModel } from '../swagger/view-models';

@ApiTags('Products')
@Controller('api/products')
export class GetProductByIdController {
  constructor(private readonly produtsService: ProductsService) {}

  @ApiOperation({ summary: 'Get Product By Id' })
  @ApiResponse({
    status: 200,
    description: 'Success',
    type: ProductResponseViewModel,
  })
  @ApiResponse(HttpNotFoundError)
  @ApiParam({ name: 'id', type: String })
  @Get(':id')
  async execute(@Param('id') id: string): Promise<ProductResponseViewModel> {
    const product = await this.produtsService.getById(id);

    return ProductResponseViewModel.toViewModel(product);
  }
}
