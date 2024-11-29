import { Module } from '@nestjs/common';
import { RecipeModule } from 'recipe-api/recipe.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [RecipeModule],
  providers: [AppService],
  controllers: [AppController],
})
export class AppModule {}
