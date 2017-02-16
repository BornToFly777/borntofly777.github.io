import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AdminFormComponent } from './admin-form/admin-form.component';

@NgModule({
  declarations: [
    AdminFormComponent
  ],
  imports: [
    SharedModule
  ],
  providers: [
  ],
  exports: [
    AdminFormComponent
  ]
})
export class AdminModule { }
