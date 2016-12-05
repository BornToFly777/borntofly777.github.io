import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CityListComponent } from './city-list/city-list.component';
import { CityWeatherComponent } from './city-list/city-weather/city-weather.component';

@NgModule({
  declarations: [
    CityListComponent,
    CityWeatherComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
  ],
  exports: [
    CityListComponent
  ]
})
export class WeatherModule { }