import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { AdminFormComponent } from './admin-form/admin-form.component';

@NgModule({
  declarations: [
    AdminFormComponent
  ],
  imports: [
    SharedModule,
    ReactiveFormsModule
  ],
  providers: [
  ],
  exports: [
    AdminFormComponent
  ]
})
export class AdminModule { }
