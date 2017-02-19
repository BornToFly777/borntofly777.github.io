import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { WeatherRoutingModule } from "./weather-routing.module";

import { CityListComponent } from './city-list/city-list.component';
import { CityWeatherComponent } from './city-list/city-weather/city-weather.component';
import { TemperatureConverterPipe } from './pipes/temperatureConverter.pipe';
import { PaintCityDirective } from './directives/paint-city/paint-city.directive';
import { ShowWindComponent } from './city-list/show-wind/show-wind.component';
import { ArrowDirectionDirective } from './directives/arrow-direction/arrow-direction.directive';
import { ShowIconComponent } from './city-list/show-icon/show-icon.component';
import { WeatherWelcomeComponent } from './weather-welcome/weather-welcome.component';
import { CityDetailsComponent } from './city-details/city-details.component';

@NgModule({
  declarations: [
    CityListComponent,
    CityWeatherComponent,
    TemperatureConverterPipe,
    PaintCityDirective,
    ShowWindComponent,
    ArrowDirectionDirective,
    ShowIconComponent,
    WeatherWelcomeComponent,
    CityDetailsComponent
  ],
  imports: [
    SharedModule,
    WeatherRoutingModule
  ],
  providers: [
  ],
  exports: [
    CityListComponent
  ]
})
export class WeatherModule { }