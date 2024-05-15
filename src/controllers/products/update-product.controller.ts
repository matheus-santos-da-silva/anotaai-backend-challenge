import { Body, Controller, Param, Patch } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { HttpNotFoundError } from '../swagger/http-errors';
import { ProductResponseViewModel } from '../swagger/view-models';
import { ProductsService } from '../../services/products/products.service';
import { UpdateProductVM } from '../swagger/view-models/';

@ApiTags('Products')
@Controller('api/products')
export class UpdateProductController {
  constructor(private readonly produtsService: ProductsService) {}

  @ApiOperation({ summary: 'Update Product' })
  @ApiResponse({
    status: 200,
    description: 'Success',
    type: ProductResponseViewModel,
  })
  @ApiResponse(HttpNotFoundError)
  @ApiParam({ name: 'id', type: String })
  @Patch(':id')
  async execute(
    @Param('id') id: string,
    @Body() data: UpdateProductVM,
  ): Promise<ProductResponseViewModel> {
    const updatedProduct = await this.produtsService.update(id, data);

    return ProductResponseViewModel.toViewModel(updatedProduct);
  }
}
