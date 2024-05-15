import { Controller, Delete, Param } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { HttpNotFoundError } from '../swagger/http-errors';
import { ProductsService } from '../../services/products/products.service';

@ApiTags('Products')
@Controller('api/products')
export class DeleteProductController {
  constructor(private readonly productsService: ProductsService) {}

  @ApiOperation({ summary: 'Delete Product' })
  @ApiResponse({
    status: 200,
    description: 'Success',
  })
  @ApiResponse(HttpNotFoundError)
  @ApiParam({ name: 'id', type: String })
  @Delete(':id')
  async execute(@Param('id') id: string): Promise<void> {
    await this.productsService.delete(id);
  }
}
