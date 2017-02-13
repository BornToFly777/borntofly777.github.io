import { Component, OnInit } from '@angular/core';
import { ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

import * as _ from 'lodash';

import { City } from '../../models/city.model';
import { Coords } from '../../models/coords.model';

import { LoggerService } from '../../core/services/logger/logger.service';
import { LocationService } from '../../core/services/location/location.service';
import { WeatherService } from '../../core/services/weather/weather.service';

@Component({
	selector: 'app-city-list',
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: './city-list.component.html',
	styleUrls: ['./city-list.component.css']
})
export class CityListComponent implements OnInit {
	cityList: Array<City>;

	constructor(
		private ref: ChangeDetectorRef, 
		private loggerService: LoggerService,
		private locationService: LocationService,
		private weatherService: WeatherService
	) { }

	ngOnInit() {
		let getWeather = () => {
			this.weatherService.getWeather().then(data => {
				this.ref.detach();
				this.cityList = data;
				this.loggerService.log('New weather have been loaded');
				this.detectChanges();
			}, error => {
				this.loggerService.log('Something got wrong while fetching weather, wait for 30 seconds for another attempt');
			});
		}

		getWeather();

		setInterval(() => {
			getWeather();
		}, 30000);

	}

	onFavourite(id: number, index: number): void {
		let cloneListCities:Array<City> = _.cloneDeep(this.cityList);
		_.forEach(cloneListCities, (city) => {
			city.favourite = city.id === id ? true : false;
			if (city.favourite) {
				this.loggerService.log('Your favourite city now is ' + city.name);
			}
		})
		this.cityList = cloneListCities;
		this.detectChanges();
	}

	onDeleteCity(id: number, index: number): void {
		this.loggerService.log('You have deleted ' + this.cityList[index].name + ' from list');
		this.cityList.splice(index, 1);
		this.detectChanges();
	}

	detectChanges() {
		this.ref.reattach();
		this.ref.detectChanges();
		this.ref.detach();
	}

}
