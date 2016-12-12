import { Component, OnInit } from '@angular/core';

import { City } from './../city.model';
import { Coords } from './../coords.model';

@Component({
	selector: 'app-city-list',
	templateUrl: './city-list.component.html',
	styleUrls: ['./city-list.component.css']
})
export class CityListComponent implements OnInit {
	cityListPromise: Promise<Array<City>>;
	coords: Coords;

	constructor() { }

	ngOnInit() {
		const API_WEATHER_KEY = 'f9ddf31de1f2a7aafa162e68b9ffc586';

		let vm = this;

		// todo move to service
		let loadWeather = (url:string):Promise<Array<City>> => {
			return new Promise<Array<City>>((resolve, reject) => {
				fetch(url)
					.then(response => response.json())
					.then(body => resolve(body.list))
					.catch(error => reject(error))
			});
		};

		let getMyPosition = (position:Position) => {
			vm.coords = {
				lat: position.coords.latitude,
				lon: position.coords.longitude
			}

			let URL:string = 'http://api.openweathermap.org/data/2.5/find?lat=' + vm.coords.lat + '&lon=' +
				vm.coords.lon + '&cnt=10&appid=' + API_WEATHER_KEY;

			vm.cityListPromise = loadWeather(URL);
		};
		navigator.geolocation.getCurrentPosition(getMyPosition);
	}

}
