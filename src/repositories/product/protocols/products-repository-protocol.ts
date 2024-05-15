import { CreateProductDTO } from '../../../domain/product/dtos/create-product-dto';
import { Product } from '../../../domain/product/product.entity';

export abstract class ProductsRepositoryProtocol {
  abstract create(data: CreateProductDTO): Promise<Product>;
}
