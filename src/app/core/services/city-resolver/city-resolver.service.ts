import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { WeatherService } from '../weather/weather.service';

@Injectable()
export class CityResolverService implements Resolve<any> {

	constructor(
		private weatherService: WeatherService,
		private router: Router
	) { }

	resolve(route: ActivatedRouteSnapshot): Observable<any> | Promise<any> | any {
		let id = +route.params['id'];
		return this.weatherService.getWeatherById(id).subscribe(city => {
			console.log('city', city);
			if (city) {
				return city;
			} else { // id not found
				this.router.navigate(['/']);
				return false;
			}
		});
	}

}
