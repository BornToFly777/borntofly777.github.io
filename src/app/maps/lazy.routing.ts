import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GoogleMapComponent } from './google-map/google-map.component';

const routes: Routes = [
	{ path: 'map', component: GoogleMapComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);