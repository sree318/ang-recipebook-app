import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { DropDownDirective } from './dropdown.directive';

@NgModule({
  declarations: [LoadingSpinnerComponent, DropDownDirective],
  imports: [CommonModule],
  exports: [LoadingSpinnerComponent, DropDownDirective],
})
export class SharedModule {}
