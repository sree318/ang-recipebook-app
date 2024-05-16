import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
// import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.scss',
})
export class RecipeItemComponent {
  @Input() recipe: Recipe; // recieved from the property [recipe] in recipe-list
  @Input() index: number;
  // @Output() recipeSelected = new EventEmitter<void>(); //emitted to recipe-list

  // constructor(private recipeService: RecipeService) {}

  ngOnInit() {}
  // onSelected() {
  //   this.recipeSelected.emit();
  // }
  // onSelected() {
  //   this.recipeService.recipeSelected.emit(this.recipe);
  // }
}
