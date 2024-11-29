import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Recipe } from './dto/recipe';
@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  apiBaseURL = 'http://localhost:3000';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private httpClient: HttpClient) {}

  getAllRecipes() {
    return this.httpClient
      .get(`${this.apiBaseURL}/recipe`)
      .pipe(map((res) => res));
  }

  createRecipe(recipe: Recipe): any {
    return this.httpClient.post<any>(
      this.apiBaseURL + '/recipe',
      JSON.stringify(recipe),this.httpOptions
    );
  }
  findRecipe(id: number): Observable<any> {
    return this.httpClient.get(this.apiBaseURL + '/recipe/' + id);
  }

  updateRecipe(id: number,recipe: Recipe): any {
    return this.httpClient.put(this.apiBaseURL + '/recipe/' + id, JSON.stringify(recipe),this.httpOptions
    );
  }
}
