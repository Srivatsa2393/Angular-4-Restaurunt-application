import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../recipes/recipe.service';

@Injectable()
export class DataStorageSevice {
    constructor(private http: Http, private recipeService: RecipeService){}


    storeRecipes() {
        return this.http.put('https://ng-recipe-book-fdbc0.firebaseio.com/recipes.json', this.recipeService.getRecipes());
    }

    getRecipes() {
        return this.http.get('https://ng-recipe-book-fdbc0.firebaseio.com/recipes.json')
            .subscribe(
                (response: Response) => {
                    const recipes: Recipe[] = response.json();

                    this.recipeService.setRecipes(recipes);
                }
            );
    }
}