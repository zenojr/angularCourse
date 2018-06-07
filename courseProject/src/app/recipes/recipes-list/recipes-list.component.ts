import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [ // the Recipe store a array of objects from recipe class
    new Recipe('Test Item', 'This is a test', 'http://app.bellesoftware.com.br/files/imgs/logo_prof.png'),
    new Recipe('Test Item2', 'This is second test', 'http://app.bellesoftware.com.br/files/imgs/logo_prof.png')
  ];

  constructor() { }

  ngOnInit() {
  }

}
