import { NgModule } from '@angular/core';

import { CoreModule } from '../core/core.module';
import { RouterModule, Routes } from "@angular/router";

import { CityListComponent } from './city-list/city-list.component';
import { WeatherWelcomeComponent } from './weather-welcome/weather-welcome.component';
import { CityDetailsComponent } from './city-details/city-details.component';

const routes: Routes = [
	{
		path: 'weather',
		component: CityListComponent,
		children: [
			{
				path: ':id',
				component: CityDetailsComponent
			},
			{
				path: '',
				component: WeatherWelcomeComponent
			}
		]
	}
];

@NgModule({
	imports: [
		RouterModule.forChild(routes)
	],
	exports: [
		RouterModule
	]
})
export class WeatherRoutingModule {
}