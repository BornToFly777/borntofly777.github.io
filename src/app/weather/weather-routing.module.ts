import { NgModule } from '@angular/core';

import { CoreModule } from '../core/core.module';
import { RouterModule, Routes } from "@angular/router";
import { CityResolverService } from '../core/services/city-resolver/city-resolver.service';

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
				component: CityDetailsComponent,
				resolve: {
					city: CityResolverService
				}
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