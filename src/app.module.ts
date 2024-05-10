import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DATABASE_URL } from './env';

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
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
