import { Component, OnInit } from '@angular/core';

import * as _ from 'lodash';

import { City } from '../../models/city.model';
import { Coords } from '../../models/coords.model';

import { LoggerService } from '../../core/services/logger/logger.service';

import { Store } from '@ngrx/store';
import * as CitiesActions from '../../actions/cities.actions';
import { InitialState } from '../../states';
import { CitiesState } from '../../states/cities.state';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-city-list',
	templateUrl: './city-list.component.html',
	styleUrls: ['./city-list.component.css']
})
export class CityListComponent implements OnInit {
	private subscription: Subscription;
	private cityList: Array<City>;

	constructor(
		private store: Store<InitialState>,
		private loggerService: LoggerService
	) { }

	ngOnInit() {
		this.subscription = this.store
				.select((s: InitialState) => s.cities)
				.subscribe(({cities}: CitiesState): void => {
					this.cityList = cities;
				});

		let getWeather = () => {
			this.store.dispatch(new CitiesActions.LoadAction([]));
		};

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
	}

	onDeleteCity(id: number, index: number): void {
		this.loggerService.log('You have deleted ' + this.cityList[index].name + ' from list');
		this.cityList.splice(index, 1);
	}

}
