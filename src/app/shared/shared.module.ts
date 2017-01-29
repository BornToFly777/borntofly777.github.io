import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomIfDirective } from './directives/custom-if/custom-if.directive';

@NgModule({
  declarations: [
    CustomIfDirective
  ],
  imports: [
    CommonModule
  ],
  providers: [
  ],
  exports: [
    CommonModule,
    CustomIfDirective
  ]
})
export class SharedModule { }