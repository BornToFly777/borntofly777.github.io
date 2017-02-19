import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from "@angular/router";

import { City } from '../../models/city.model';

@Component({
	selector: 'app-city-details',
	templateUrl: './city-details.component.html',
	styleUrls: ['./city-details.component.css']
})

export class CityDetailsComponent implements OnInit {

	city: City;
	countToError: number = 3;

	constructor(
		private route: ActivatedRoute,
		private router: Router
	) { }

	ngOnInit() {

		let loadWeather = (url: string): Promise<City> => {
			return new Promise<City>((resolve, reject) => {
				fetch(url)
					.then(response => response.json())
					.then(body => {
						this.countToError--;
						if (this.countToError > 0) {
							resolve(body);
						} else {
							reject('error');
						}
					})
			});
		};

		let getWeather = (url: string) => {
			let cityListPromise:Promise<City> = loadWeather(url);

			cityListPromise
				.then(data => {
					this.city = data;
				}, error => {
					this.router.navigate(['../'], {relativeTo: this.route});
				})
		}

		this.route.params
			.subscribe((params: any) => {
				const id = params.id;

				const API_WEATHER_KEY = 'f9ddf31de1f2a7aafa162e68b9ffc586';

				const p = new Promise<Array<City>>((resolve, reject) => {
					let URL:string = 'http://api.openweathermap.org/data/2.5/weather?id=' + id + '&appid=' + API_WEATHER_KEY;

					getWeather(URL);

				});
			})

	}

}
