import { Component } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '../../Service/recipe-backend.service';
import { Recipe } from '../../Service/dto/recipe';

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [],
  templateUrl: './view-recipe.component.html',
})
export class ViewRecipeComponent {
  id!: number;
  recipe!: Recipe;

  constructor(
    public recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.recipeService.findRecipe(this.id).subscribe((data: Recipe) => {
      this.recipe = data;
    });
  }
}
