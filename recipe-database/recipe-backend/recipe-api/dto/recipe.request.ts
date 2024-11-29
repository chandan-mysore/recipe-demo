import { IsNotEmpty, IsOptional } from 'class-validator';

export class RecipeRequest {
  @IsOptional()
  Id: number;

  @IsNotEmpty()
  Name: string;

  @IsNotEmpty()
  Description: string;

  @IsNotEmpty()
  Cooking_Time: number;

  @IsNotEmpty()
  Preparation_Time: number;
}
