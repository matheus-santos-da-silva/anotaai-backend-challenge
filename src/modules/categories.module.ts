import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from '../domain/category/category.entity';
import { CategoriesRepository } from '../repositories/categories/categories-repository';
import { CategoriesService } from '../services/categories/categories.service';
import { CategoriesControllers } from '../controllers/categories';
import { AwsSNSModule } from '../infra/aws/config/aws-sns-config';
import { AwsSnsService } from '../services/aws/aws-sns.service';

@Module({
  imports: [TypeOrmModule.forFeature([Category]), AwsSNSModule],
  controllers: [...CategoriesControllers],
  providers: [CategoriesService, CategoriesRepository, AwsSnsService],
})
export class CategoriesModule {}
