import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Banana leaf recipe', 'This is a south indian delicacy', 'https://qph.ec.quoracdn.net/main-qimg-354cc2f5631d06144cd25b6f6384a056'),
    new Recipe('A Roti recipe', 'This is a north indian delicacy', 'http://greatindianfood.in/wp-content/uploads/2016/08/gallery11_1383585.jpeg')

  ];
  constructor() { }

  ngOnInit() {
  }

}
