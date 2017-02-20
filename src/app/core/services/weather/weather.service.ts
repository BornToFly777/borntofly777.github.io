import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';

import { LoggerService } from '../logger/logger.service';
import { LocationService } from '../location/location.service';

import { City } from '../../../models/city.model';

@Injectable()
export class WeatherService {
	private API_WEATHER_KEY: string = 'f9ddf31de1f2a7aafa162e68b9ffc586';

	constructor(
		private locationService: LocationService,
		private loggerService: LoggerService
	) { }

	getWeather(): Observable<any> {

		const p = new Promise<Array<City>>((resolve, reject) => {
			this.locationService.getCoords().then(coords => {
				let URL:string = 'http://api.openweathermap.org/data/2.5/find?lat=' + coords.lat + '&lon=' +
					coords.lon + '&cnt=10&appid=' + this.API_WEATHER_KEY;

				fetch(URL)
					.then(response => response.json())
					.then(body => {
						resolve(body.list);
						this.loggerService.log('New weather have been loaded');
					})
					.catch(() => this.loggerService.log('Something got wrong while fetching weather, wait for 30 seconds for another attempt'))
			});

		});

		return Observable.fromPromise(p);
	}

	getWeatherById(id: number): Observable<any> {
		const p = new Promise<Array<City>>((resolve, reject) => {
			let URL: string = 'http://api.openweathermap.org/data/2.5/weather?id=' + id + '&appid=' + this.API_WEATHER_KEY;

			fetch(URL)
				.then(response => response.json())
				.then(body => {
					resolve(body);
					this.loggerService.log('New weather for city have been loaded');
				})
				.catch(() => this.loggerService.log('Something got wrong'))

		});
		return Observable.fromPromise(p);
	}

}
