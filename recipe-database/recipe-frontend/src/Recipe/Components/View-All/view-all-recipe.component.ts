import { Component, ViewChild } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { Table, TableModule } from 'primeng/table';
import { Recipe } from '../../Service/dto/recipe';
import { RecipeService } from '../../Service/recipe-backend.service';

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [TableModule ,ButtonModule],
  templateUrl: './view-all-recipe.component.html'
})
export class ViewAllRecipeComponent {
  recipes!: Recipe[];
  @ViewChild('dt') table!: Table ;
  loading: boolean = true;

  selectedRecipe!: Recipe[];

  constructor(
    public recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.recipeService.getAllRecipes().subscribe((data) => {
      console.log(data);
      this.recipes = data as Recipe[];
    });
  }

    onActivityChange(event: any) {
      const value = event.target.value;
      if (value && value.trim().length) {
          const activity = parseInt(value);

          if (!isNaN(activity)) {
              this.table.filter(activity, 'activity', 'gte');
          }
      }
  
  }
  globalSearch($event: any){
    this.table!.filterGlobal($event.target.value, 'contains');
  }

  viewRecipe(recipeId:any){
    this.router.navigate(['/recipe/'+recipeId+'/view'])
  }

  editRecipe(recipeId:any){
    this.router.navigate(['/recipe/'+recipeId+'/edit'])
    console.log("edit");
  }
}
