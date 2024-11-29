import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router, RouterOutlet, ActivatedRoute } from '@angular/router';
import { MenuItem, MenuItemCommandEvent } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { TableModule } from 'primeng/table';
import { Recipe } from '../Recipe/Service/dto/recipe';
import { RecipeService } from '../Recipe/Service/recipe-backend.service';
import { routes } from './app.routes';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, TableModule, MenubarModule],
  providers: [HttpClient, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'recipe-frontend';
  menuItems:any = [];

  recipes: Recipe[] = [];

  constructor(private router: Router) {
    
    this.menuItems = [
      {
        label: 'Home ',
        command: () => {
          this.router.navigate([''])          
        },
      },
      {
        label: 'Create',
        command: () => {
          this.router.navigate(['/recipe/create'])
          
        },
      },
    
    ];
  }
  ngOnInit() {
    // this.recipeService.getAllRecipes().subscribe((data) => {
    //   console.log(data);
    //   this.recipes = data as Recipe[];
    // });
  }
}
