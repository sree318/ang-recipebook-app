import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Briyani',
      'Spicy and tasty',
      'https://img.freepik.com/free-photo/gourmet-chicken-biryani-with-steamed-basmati-rice-generated-by-ai_188544-13480.jpg'
    ),
    new Recipe(
      'Briyani',
      'Spicy and tasty',
      'https://img.freepik.com/free-photo/gourmet-chicken-biryani-with-steamed-basmati-rice-generated-by-ai_188544-13480.jpg'
    ),
  ];

  getRecipes() {
    return this.recipes.slice(); //.slice() will return a new array, an eaxct copy of the original one
  }
}
