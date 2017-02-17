import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomIfDirective } from './directives/custom-if/custom-if.directive';
import { ValidationErrorsComponent } from './components/validation-errors/validation-errors.component';

@NgModule({
  declarations: [
    CustomIfDirective,
    ValidationErrorsComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
  ],
  exports: [
    CommonModule,
    CustomIfDirective,
    ValidationErrorsComponent
  ]
})
export class SharedModule { }