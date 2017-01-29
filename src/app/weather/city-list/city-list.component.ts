import { Component, OnInit } from '@angular/core';
import { ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

import * as _ from 'lodash';

import { City } from './../city.model';
import { Coords } from './../coords.model';

@Component({
	selector: 'app-city-list',
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: './city-list.component.html',
	styleUrls: ['./city-list.component.css']
})
export class CityListComponent implements OnInit {
	cityList: Array<City>;
	coords: Coords;

	constructor(private ref: ChangeDetectorRef) { }

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

			vm.ref.detach();

			let getWeather = () => {
				let cityListPromise:Promise<Array<City>> = loadWeather(URL);

				cityListPromise
					.then(data => {
						vm.cityList = data;
						vm.detectChanges();
					})
			}

			getWeather();

			setInterval(() => {
				getWeather();
			}, 30000);
		};
		navigator.geolocation.getCurrentPosition(getMyPosition);
	}

	onFavourite(id: number, index: number): void {
		let cloneListCities:Array<City> = _.cloneDeep(this.cityList);
		_.forEach(cloneListCities, (city) => {
			city.favourite = city.id === id ? true : false;
		})
		this.cityList = cloneListCities;
		this.detectChanges();
	}

	onDeleteCity(id: number, index: number): void {
		this.cityList.splice(index, 1);
		this.detectChanges();
	}

	detectChanges() {
		this.ref.reattach();
		this.ref.detectChanges();
		this.ref.detach();
	}

}
