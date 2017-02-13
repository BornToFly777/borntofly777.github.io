import { NgModule } from '@angular/core';

import { WeatherModule } from './weather/weather.module';
import { GoogleMapsModule } from './maps/googleMaps.module';

import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducer } from './reducers';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    WeatherModule,
    GoogleMapsModule,
    StoreModule.provideStore(reducer)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
