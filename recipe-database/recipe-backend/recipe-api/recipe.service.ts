import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RecipeRequest } from './dto/recipe.request';
import { Recipe } from 'recipe-db/recipe.entity';

@Injectable()
export class RecipeService {
  constructor(
    @InjectRepository(Recipe)
    private readonly recipeRepository: Repository<Recipe>,
  ) {}

  async createRecipe(recipe: RecipeRequest): Promise<RecipeRequest> {
    const recipeRep = this.recipeRepository.create(recipe);
    return this.recipeRepository.save(recipeRep);
  }

  async getAllRecipes(): Promise<RecipeRequest[]> {
    return this.recipeRepository.find();
  }

  async findOne(Id: number): Promise<RecipeRequest> {
    return this.recipeRepository.findOne({ where: { Id } });
  }

  async update(Id: number, recipe: RecipeRequest): Promise<any> {
    await this.recipeRepository.update(Id, recipe);
    return this.recipeRepository.findOne({ where: { Id } });
  }

  async delete(id: number): Promise<void> {
    await this.recipeRepository.delete(id);
  }
}
