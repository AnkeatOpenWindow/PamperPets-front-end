import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipes } from '../models/recipe.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http: HttpClient) { }

  private baseURL = "http://localhost:3000/recipe"

  // get all inventory items
  getAllRecipes(): Observable<Recipes[]> {
    return this.http.get<Recipes[]>(this.baseURL)
  }

  //Call the crafting functionality
  craftRecipe(recipe: Recipes): Observable<Recipes> {
    var craftUrl = this.baseURL + "/" + recipe.id + "/craft"
    return this.http.put<Recipes>(craftUrl, { amount: recipe.amountCrafted + 1, ingredients: recipe.ingredients })
  }

}
