import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';

import { LocationService } from '../location/location.service';

import { City } from '../../../models/city.model';

@Injectable()
export class WeatherService {

	constructor(private locationService: LocationService) { }

	getWeather(): Observable<any> {
		const API_WEATHER_KEY = 'f9ddf31de1f2a7aafa162e68b9ffc586';

		const p = new Promise<Array<City>>((resolve, reject) => {
			this.locationService.getCoords().then(coords => {
				let URL:string = 'http://api.openweathermap.org/data/2.5/find?lat=' + coords.lat + '&lon=' +
					coords.lon + '&cnt=10&appid=' + API_WEATHER_KEY;

				fetch(URL)
					.then(response => response.json())
					.then(body => resolve(body.list))
					.catch(error => reject(error))
			});

		});

		return Observable.fromPromise(p);
	}

}
