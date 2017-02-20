import { NgModule } from '@angular/core';

import { CoreModule } from '../core/core.module';
import { RouterModule, Routes } from "@angular/router";

import { AdminFormComponent } from '../admin/admin-form/admin-form.component';
import { GoogleMapComponent } from '../maps/google-map/google-map.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';

const appRoutes: Routes = [
	{
		path: '',
		redirectTo: 'weather',
		pathMatch: 'full'
	},
	{
		path: 'admin',
		component: AdminFormComponent
	},
	{
		path: 'map',
		loadChildren: 'app/maps/google-maps.module#GoogleMapsModule'
	},
	{
		path: '**',
		component: ErrorPageComponent
	}
];

@NgModule({
	declarations: [
		ErrorPageComponent
	],
	imports: [
		RouterModule.forRoot(
			appRoutes,
			{
				useHash: true,
				enableTracing: true,
			}
		)
	],
	exports: [
		RouterModule,
		ErrorPageComponent
	]
})
export class RoutingModule { }
