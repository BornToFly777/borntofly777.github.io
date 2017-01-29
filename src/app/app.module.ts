import { NgModule } from '@angular/core';

import { WeatherModule } from './weather/weather.module';
import { GoogleMapsModule } from './maps/googleMaps.module';

import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    WeatherModule,
    GoogleMapsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
