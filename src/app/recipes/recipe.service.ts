import { Ingredient } from '../shared/Ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Briyani',
      'Spicy and tasty',
      'https://img.freepik.com/free-photo/gourmet-chicken-biryani-with-steamed-basmati-rice-generated-by-ai_188544-13480.jpg',
      [new Ingredient('Meat', 1), new Ingredient('Rice', 2)]
    ),
    new Recipe(
      ' Fried Rice',
      'Colorful and Yummy',
      'https://kfoods.com/images1/newrecipeicon/chinese-egg-fried-rice_1418.jpg',
      [
        new Ingredient('Carrot', 1),
        new Ingredient('Beans', 2),
        new Ingredient('Rice', 1),
        new Ingredient('Cabbage', 1),
      ]
    ),
    new Recipe(
      'Lemon Rice',
      'Rich in taste',
      'https://img.global.news.samsung.com/in/wp-content/uploads/2021/06/ccc.jpg',
      [new Ingredient('Lemon', 1), new Ingredient('Rice', 1 / 2)]
    ),
  ];
  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice(); //.slice() will return a new array, an eaxct copy of the original one
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
    console.log('addIngredientsToShoppingList list is called');
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }
}
