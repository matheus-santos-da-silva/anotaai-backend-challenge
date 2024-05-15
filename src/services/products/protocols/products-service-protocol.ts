import { UpdateProductDTO } from '../../../domain/product/dtos/update-product-dto';
import { CreateProductDTO } from '../../../domain/product/dtos/create-product-dto';
import { Product } from '../../../domain/product/product.entity';

export abstract class ProductsServiceProtocol {
  abstract create(data: CreateProductDTO): Promise<Product>;
  abstract getAll(): Promise<Product[]>;
  abstract getById(id: string): Promise<Product>;
  abstract update(id: string, data: UpdateProductDTO): Promise<Product>;
  abstract delete(id: string): Promise<void>;
}
