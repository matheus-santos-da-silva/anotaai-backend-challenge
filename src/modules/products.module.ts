import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from '../domain/product/product.entity';
import { ProductsService } from '../services/products/products.service';
import { ProductsRepository } from '../repositories/product/products-repository';
import { ProductsControllers } from '../controllers/products';
import { Category } from '../domain/category/category.entity';
import { CategoriesService } from '../services/categories/categories.service';
import { CategoriesRepository } from '../repositories/categories/categories-repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([Product]),
    TypeOrmModule.forFeature([Category]),
  ],
  controllers: [...ProductsControllers],
  providers: [
    ProductsService,
    ProductsRepository,
    CategoriesService,
    CategoriesRepository,
  ],
})
export class ProductsModule {}
