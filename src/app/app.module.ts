import { NgModule } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";

import {RouterModule, Routes} from "@angular/router";

import { WeatherModule } from './weather/weather.module';
import { GoogleMapsModule } from './maps/googleMaps.module';
import { AdminModule } from './admin/admin.module';

import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducer } from './reducers';
import { CitiesEffects } from './effects/cities.effects';

import { AdminFormComponent } from './admin/admin-form/admin-form.component';
import { CityListComponent } from './weather/city-list/city-list.component';
import { GoogleMapComponent } from './maps/google-map/google-map.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';

const appRoutes: Routes = [
    {
        path: 'admin',
        component: AdminFormComponent
    },
    {
        path: 'weather',
        component: CityListComponent
    },
    {
        path: 'map',
        component: GoogleMapComponent
    },
    {
        path: '',
        redirectTo: '/weather',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: ErrorPageComponent
    }
];

@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    WeatherModule,
    GoogleMapsModule,
    AdminModule,
    StoreModule.provideStore(reducer),
    EffectsModule.run(CitiesEffects),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
