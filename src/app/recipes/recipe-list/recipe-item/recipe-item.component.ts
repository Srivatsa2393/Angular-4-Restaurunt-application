<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
=======
import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';
>>>>>>> 392631671c372045fd555be54d919d72aff00049

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

<<<<<<< HEAD
  constructor() { }
=======
  @Input() recipe: Recipe;

  //@Output() recipeSelected = new EventEmitter<void>();

  constructor(private recipeService: RecipeService) { }
>>>>>>> 392631671c372045fd555be54d919d72aff00049

  ngOnInit() {
  }

<<<<<<< HEAD
=======
  onSelected() {
    //this.recipeSelected.emit();
    this.recipeService.recipeSelected.emit(this.recipe);
  }

>>>>>>> 392631671c372045fd555be54d919d72aff00049
}
