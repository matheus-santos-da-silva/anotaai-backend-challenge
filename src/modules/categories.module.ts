import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from '../domain/category/category.entity';
import { CategoriesRepository } from '../repositories/categories/categories-repository';
import { CategoriesService } from '../services/categories/categories.service';
import { CategoriesControllers } from 'src/controllers/categories';

@Module({
  imports: [TypeOrmModule.forFeature([Category])],
  controllers: [...CategoriesControllers],
  providers: [CategoriesService, CategoriesRepository],
})
export class CategoriesModule {}
