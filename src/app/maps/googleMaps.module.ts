import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AgmCoreModule } from 'angular2-google-maps/core';

import { GoogleMapComponent } from './google-map/google-map.component';

@NgModule({
  declarations: [
    GoogleMapComponent
  ],
  imports: [
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