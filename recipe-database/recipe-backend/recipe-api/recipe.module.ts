import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecipeController } from 'recipe-api/recipe.controller';
import { RecipeService } from 'recipe-api/recipe.service';
import { Recipe } from 'recipe-db/recipe.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'test_user',
      password: 'test_password',
      database: 'test_db',
      entities: [__dirname + '/../**/*.entity.js'],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Recipe]),
  ],
  providers: [RecipeService],
  controllers: [RecipeController],
})
export class RecipeModule {}
