import { Routes } from '@angular/router';
import { ViewRecipeComponent } from '../Recipe/Components/View/view-recipe.component';
import { CreateRecipeComponent } from '../Recipe/Components/Create/create-recipe.component';
import { EditRecipeComponent } from '../Recipe/Components/Edit/edit-recipe.component';
import { AppComponent } from './app.component';
import { ViewAllRecipeComponent } from '../Recipe/Components/View-All/view-all-recipe.component';

export const routes: Routes = [
  { path: '', component: ViewAllRecipeComponent },
  { path: 'recipe/:id/view', component: ViewRecipeComponent },
  { path: 'recipe/create', component: CreateRecipeComponent },
  { path: 'recipe/:id/edit', component: EditRecipeComponent },
];
