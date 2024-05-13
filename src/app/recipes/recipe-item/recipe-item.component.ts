import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.scss',
})
export class RecipeItemComponent {
  @Input() recipe: Recipe; // recieved from the property [recipe] in recipe-list

  @Output() recipeSelected = new EventEmitter<void>(); //emitted to recipe-list

  constructor() {}

  ngOnInit() {}

  onSelected() {
    this.recipeSelected.emit();
  }
}
