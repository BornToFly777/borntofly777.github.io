import { NgModule } from '@angular/core';

import { WeatherModule } from './weather/weather.module';
import { GoogleMapsModule } from './maps/googleMaps.module';
import { AdminModule } from './admin/admin.module';

import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducer } from './reducers';
import { CitiesEffects } from './effects/cities.effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    WeatherModule,
    GoogleMapsModule,
    AdminModule,
    StoreModule.provideStore(reducer),
    EffectsModule.run(CitiesEffects)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
