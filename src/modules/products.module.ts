import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from '../domain/product/product.entity';
import { ProductsService } from '../services/products/products.service';
import { ProductsRepository } from '../repositories/products/products-repository';
import { ProductsControllers } from '../controllers/products';
import { Category } from '../domain/category/category.entity';
import { CategoriesService } from '../services/categories/categories.service';
import { CategoriesRepository } from '../repositories/categories/categories-repository';
import { AwsSnsService } from '../services/aws/aws-sns.service';
import { AwsSNSModule } from '../infra/aws/config/aws-sns-config';

@Module({
  imports: [
    TypeOrmModule.forFeature([Product]),
    TypeOrmModule.forFeature([Category]),
    AwsSNSModule,
  ],
  controllers: [...ProductsControllers],
  providers: [
    ProductsService,
    ProductsRepository,
    CategoriesService,
    CategoriesRepository,
    AwsSnsService,
  ],
})
export class ProductsModule {}
