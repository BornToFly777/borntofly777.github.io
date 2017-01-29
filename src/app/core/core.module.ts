import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { LoggerService } from './services/logger/logger.service';
import { LocationService } from './services/location/location.service';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [
    LoggerService,
    LocationService
  ],
  exports: [
  ]
})
export class CoreModule { }