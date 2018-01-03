import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();

    //recipeSelected = new EventEmitter<Recipe>();


    private recipes: Recipe[] = [
        new Recipe(
            'A Banana leaf recipe',
            'This is a south indian delicacy',
            'https://qph.ec.quoracdn.net/main-qimg-354cc2f5631d06144cd25b6f6384a056',
            [
                new Ingredient('Rice', 1),
                new Ingredient('Vegetables', 10)
            ]),
        new Recipe(
            'A Roti recipe',
            'This is a north indian delicacy',
            'http://greatindianfood.in/wp-content/uploads/2016/08/gallery11_1383585.jpeg',
            [
                new Ingredient('Bread', 2),
                new Ingredient('Vegetables', 5)
            ])
    ];

    constructor(private slService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice();
    }
    getRecipe(id: number){
        return this.recipes[id];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number){
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }
}