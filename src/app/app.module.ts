
import { NgModule } from '@angular/core';

import { CoreModule } from './core/core.module';

import { WeatherModule } from './weather/weather.module';
import { GoogleMapsModule } from './maps/googleMaps.module';

import { AppComponent } from './app.component';

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
