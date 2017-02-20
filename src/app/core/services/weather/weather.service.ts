import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';

import { LoggerService } from '../logger/logger.service';
import { LocationService } from '../location/location.service';
import { Http, RequestMethod, URLSearchParams, Headers, Request } from '@angular/http';

import { City } from '../../../models/city.model';

@Injectable()
export class WeatherService {
	private API_WEATHER_KEY: string = 'f9ddf31de1f2a7aafa162e68b9ffc586';

	constructor(
		private locationService: LocationService,
		private loggerService: LoggerService,
		private http: Http
	) { }

	getWeather(): Observable<any> {

		const p = new Promise<Array<City>>((resolve, reject) => {
			this.locationService.getCoords().then(coords => {
				const params = new URLSearchParams();
				params.append('lat', coords.lat+'');
				params.append('lon', coords.lon+'');
				params.append('cnt', '10');
				params.append('appid', this.API_WEATHER_KEY);	

				const headers = new Headers({});

				const request = new Request({
					url: 'http://api.openweathermap.org/data/2.5/find',
					method: RequestMethod.Get,
					search: params,
					headers: headers
				});

				this.http.request(request).map(response => response.json())
					.subscribe(data => resolve(data.list))
			});

		});

		return Observable.fromPromise(p);
	}

	getWeatherById(id: number): Observable<any> {
		const params = new URLSearchParams();
		params.append('id', id+'');
		params.append('appid', this.API_WEATHER_KEY);

		const headers = new Headers({});

		const request = new Request({
			url: 'http://api.openweathermap.org/data/2.5/weather',
			method: RequestMethod.Get,
			search: params,
			headers: headers
		});

		return this.http.request(request).map(response => response.json());
	}

}
