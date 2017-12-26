<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
=======
import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
>>>>>>> 392631671c372045fd555be54d919d72aff00049

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

<<<<<<< HEAD
=======
  @Input() recipe: Recipe;

>>>>>>> 392631671c372045fd555be54d919d72aff00049
  constructor() { }

  ngOnInit() {
  }

}
