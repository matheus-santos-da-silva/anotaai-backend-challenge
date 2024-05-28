import { CategoriesService } from '../../services/categories/categories.service';
import { Test, TestingModule } from '@nestjs/testing';
import { AwsSnsService } from '../../services/aws/aws-sns.service';
import { CategoriesRepository } from '../../repositories/categories/categories-repository';
import { AWSSERVICEINMEMORY } from '../in-memory-repositories/aws-service-in-memory';
import { CategoryMock } from '../mocks/category.mock';
import { Category } from '../../domain/category/category.entity';

const categoryList: Category[] = [CategoryMock, CategoryMock, CategoryMock];

describe('Categories Service', () => {
  let categoriesService: CategoriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CategoriesService,
        {
          provide: CategoriesRepository,
          useValue: {
            create: jest.fn().mockReturnValue(CategoryMock),
            getAll: jest.fn().mockReturnValue(categoryList),
          },
        },
        {
          provide: AwsSnsService,
          useClass: AWSSERVICEINMEMORY,
        },
      ],
    }).compile();

    categoriesService = module.get<CategoriesService>(CategoriesService);
  });

  it('should be defined', () => {
    expect(categoriesService).toBeDefined();
  });

  describe('create', () => {
    it('should create a new category', async () => {
      const category = await categoriesService.create(CategoryMock);
      expect(category).toEqual(CategoryMock);
    });
  });

  describe('getAll', () => {
    it('should return a categories list', async () => {
      const categories = await categoriesService.getAll();
      expect(categories).toEqual(categoryList);
    });
  });
});
