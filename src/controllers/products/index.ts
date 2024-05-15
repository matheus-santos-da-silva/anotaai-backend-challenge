import { CreateProductController } from './create-product.controller';
import { GetAllProductsController } from './get-all-products.controller';
import { GetProductByIdController } from './get-product-by-id.controller';
import { UpdateProductController } from './update-product.controller';

export const ProductsControllers = [
  CreateProductController,
  GetAllProductsController,
  GetProductByIdController,
  UpdateProductController,
];
