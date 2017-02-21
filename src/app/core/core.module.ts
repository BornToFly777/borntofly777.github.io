import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { DefaultRequestOptions, requestOptionsProvider } from './services/options-overrider/options-overrider.service';
import { LoggerService } from './services/logger/logger.service';
import { LocationService } from './services/location/location.service';
import { WeatherService } from './services/weather/weather.service';
import { CityResolverService } from './services/city-resolver/city-resolver.service';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    LoggerService,
    LocationService,
    WeatherService,
    CityResolverService,
    requestOptionsProvider
  ],
  exports: [
  ]
})
export class CoreModule { }