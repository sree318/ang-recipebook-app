import { HttpClientModule, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap, take, exhaustMap } from 'rxjs/operators';

import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../recipes/recipe.service';
import { response } from 'express';
import { AuthService } from '../auth.service';
@Injectable({ providedIn: 'root' })
// export class DataStorageService {
//   constructor(
//     private http: HttpClient,
//     private recipeService: RecipeService,
//     private authService: AuthService
//   ) {}
//   storeRecipes() {
//     const recipes = this.recipeService.getRecipes();
//     return this.http
//       .put(
//         'https://recipe-a70e6-default-rtdb.firebaseio.com/recipes.json',
//         recipes
//       )
//       .subscribe((response) => {
//         console.log(response);
//       });
//   }

//   fetchRecipes() {
//     return this.authService.user.pipe(
//       take(1),
//       exhaustMap((user) => {
//         return this.http.get<Recipe[]>(
//           'https://ng-course-recipe-book-65f10.firebaseio.com/recipes.json',
//           {
//             params: new HttpParams().set('auth', user.token),
//           }
//         );
//       }),
//       map((recipes) => {
//         return recipes.map((recipe) => {
//           return {
//             ...recipe,
//             ingredients: recipe.ingredients ? recipe.ingredients : [],
//           };
//         });
//       }),
//       tap((recipes) => {
//         this.recipeService.setRecipes(recipes);
//       })
//     );
//   }
// }
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private recipeService: RecipeService,
    private authService: AuthService
  ) {}

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http
      .put(
        'https://recipe-a70e6-default-rtdb.firebaseio.com/recipes.json',
        recipes
      )
      .subscribe((response) => {
        console.log(response);
      });
  }

  fetchRecipes() {
    return this.authService.user.pipe(
      take(1),
      exhaustMap((user) => {
        return this.http.get<Recipe[]>(
          'https://recipe-a70e6-default-rtdb.firebaseio.com/recipes.json',
          {
            params: new HttpParams().set('auth', user.token),
          }
        );
      }),
      map((recipes) => {
        return recipes.map((recipe) => {
          return {
            ...recipe,
            ingredients: recipe.ingredients ? recipe.ingredients : [],
          };
        });
      }),
      tap((recipes) => {
        this.recipeService.setRecipes(recipes);
      })
    );
  }
}
