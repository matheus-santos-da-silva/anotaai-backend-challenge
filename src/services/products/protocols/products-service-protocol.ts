import { CreateProductDTO } from '../../../domain/product/dtos/create-product-dto';
import { Product } from '../../../domain/product/product.entity';

export abstract class ProductsServiceProtocol {
  abstract create(data: CreateProductDTO): Promise<Product>;
  abstract getAll(): Promise<Product[]>;
}
