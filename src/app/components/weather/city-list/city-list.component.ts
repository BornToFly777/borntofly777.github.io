import { Component, OnInit } from '@angular/core';
import { ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { BehaviorSubject, Observable, Scheduler } from 'rxjs';

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
	cityList: Array<City> = [];
	coords: Coords;
	weatherSubject: BehaviorSubject<Array<City>>;
	weatherSubject2: BehaviorSubject<Array<City>>;
	weatherStream: Observable<Array<City>>;

	constructor(private ref: ChangeDetectorRef) { }

	ngOnInit() {
		const API_WEATHER_KEY = 'f9ddf31de1f2a7aafa162e68b9ffc586';
		const KELVIN_CELSIY_DIFFERENCE = -273.15;

		let vm = this;

		vm.weatherSubject = new BehaviorSubject([]);
		vm.weatherSubject2 = new BehaviorSubject([]);

		vm.weatherStream = Observable.merge(vm.weatherSubject, vm.weatherSubject2)
			.flatMap(cityList => {
				if (cityList.length > 0 && cityList.length < 3) {
					return Observable.throw('Repeated 2 times and quit');
				} else {
					return Observable.from(cityList);
				}
			})
			//retry 2 times on error
			.retry(2)
			.do(city => {
				if (!city.main.celsiy) {
					city.main.temp = city.main.temp + KELVIN_CELSIY_DIFFERENCE;
					city.main.celsiy = true;
				}
				return city
			})
			.filter(city => city.main.temp < 30)
			.share()
			.observeOn(Scheduler.async);

		const observerA = {
			next: city => {
				vm.cityList.push(city);
				vm.detectChanges();
			},
			error: err => {
				console.log(`Error: ${err}`);
			},
			complete: () => {
				console.log(`Completed A`);
			},
		};
		vm.weatherStream.subscribe(observerA);	

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
			};

			let URL:string = 'http://api.openweathermap.org/data/2.5/find?lat=' + vm.coords.lat + '&lon=' +
				vm.coords.lon + '&cnt=5&appid=' + API_WEATHER_KEY;

			let URL2:string = 'http://api.openweathermap.org/data/2.5/find?lat=40.7142700&lon=-74.0059700' + 
				'&cnt=5&appid=' + API_WEATHER_KEY;				

			vm.ref.detach();

			let getWeather = () => {
				let cityListPromise:Promise<Array<City>> = loadWeather(URL);

				cityListPromise
					.then(data => vm.weatherSubject.next(data));
			};

			let getWeather2 = () => {
				let cityListPromise:Promise<Array<City>> = loadWeather(URL2);

				cityListPromise
					.then(data => vm.weatherSubject2.next(data));
			};

			setTimeout(() => {
				getWeather();
			}, 1000);

			setTimeout(() => {
				getWeather2();
				setInterval(() => {
					getWeather2();
				}, 30000);
			}, 11000);

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
		});
		this.cityList = [];
		this.weatherSubject.next(cloneListCities);
	}

	onDeleteCity(id: number, index: number): void {
		let cloneListCities:Array<City> = _.cloneDeep(this.cityList);
		cloneListCities.splice(index, 1);
		this.cityList = [];
		this.weatherSubject.next(cloneListCities);
	}

	detectChanges() {
		this.ref.reattach();
		this.ref.detectChanges();
		this.ref.detach();
	}

}
