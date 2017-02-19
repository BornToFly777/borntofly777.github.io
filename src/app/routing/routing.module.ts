import { NgModule } from '@angular/core';

import { CoreModule } from '../core/core.module';
import { RouterModule, Routes } from "@angular/router";

import { AdminFormComponent } from '../admin/admin-form/admin-form.component';
import { CityListComponent } from '../weather/city-list/city-list.component';
import { GoogleMapComponent } from '../maps/google-map/google-map.component';
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
		redirectTo: 'weather',
		pathMatch: 'full'
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
