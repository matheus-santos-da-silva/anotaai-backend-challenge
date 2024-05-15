import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DATABASE_URL } from './env';
import { CategoriesModule } from './modules/categories.module';
import { ProductsModule } from './modules/products.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'postgres',
      url: DATABASE_URL,
      entities: [`${__dirname}/**/*.entity{.js,.ts}`],
      synchronize: false,
      migrations: [`${__dirname}/infra/database/migrations/{.ts,*.js}`],
      migrationsRun: true,
    }),
    CategoriesModule,
    ProductsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
