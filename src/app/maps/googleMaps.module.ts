import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AgmCoreModule } from 'angular2-google-maps/core';

import { GoogleMapComponent } from './google-map/google-map.component';

import { routing } from './lazy.routing';

@NgModule({
  declarations: [
    GoogleMapComponent
  ],
  imports: [
    routing,
    SharedModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBDOTuEovqWOhDmy2ClQvwXXMni-NLHUwI'
    })
  ],
  providers: [
  ],
  exports: [
    GoogleMapComponent
  ]
})
export class GoogleMapsModule { }