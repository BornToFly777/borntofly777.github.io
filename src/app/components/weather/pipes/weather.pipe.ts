import { Pipe, PipeTransform } from '@angular/core';

import { City } from './../city.model';
import { Coords } from './../coords.model';

@Pipe({
	name: 'weatherPipe',
	pure: false
})
export class WeatherPipe implements PipeTransform {

	private fetchedValue: string;
	private fetchPromise: Promise<City>;

	transform(value: Coords): string {
		// todo move key constant to 'constant' service
		const API_WEATHER_KEY = 'f9ddf31de1f2a7aafa162e68b9ffc586';

		let URL: string = 'http://api.openweathermap.org/data/2.5/weather?lat=' + value.lat + '&lon=' + value.lon +
			'&appid=' + API_WEATHER_KEY;

		if (!this.fetchPromise) {
			this.fetchPromise = new Promise<Coords>((resolve, reject) => {
				fetch(URL)
					.then(response => response.json())
					.then(body => resolve(body))
					.catch(error => reject(error))
			});

			this.fetchPromise.then((val:City) => this.fetchedValue = val.main.temp);
		}

		return this.fetchedValue;
	}
}