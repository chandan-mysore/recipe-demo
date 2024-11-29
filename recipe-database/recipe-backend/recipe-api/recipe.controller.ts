import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  NotFoundException,
} from '@nestjs/common';
import { RecipeService } from './recipe.service';
import { RecipeRequest } from './dto/recipe.request';

@Controller('recipe')
export class RecipeController {
  constructor(private readonly recipeService: RecipeService) {}

  @Post()
  createRecipe(@Body() recipe: RecipeRequest) {
    return this.recipeService.createRecipe(recipe);
  }

  @Get()
  getAllRecipes() {
    return this.recipeService.getAllRecipes();
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() recipe: RecipeRequest,
  ): Promise<any> {
    return this.recipeService.update(id, recipe);
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<RecipeRequest> {
    const user = await this.recipeService.findOne(id);
    if (!user) {
      throw new NotFoundException('Recipe does not exist!');
    } else {
      return user;
    }
  }
}
