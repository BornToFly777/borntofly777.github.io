import { Component, OnInit } from '@angular/core';

import { City } from '../../models/city.model';

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
		this.loggerService.log('Your favourite city now is ' + this.cityList[index].name);
		this.store.dispatch(new CitiesActions.FavouriteAction(id));
	}

	onDeleteCity(id: number, index: number): void {
		this.loggerService.log('You have deleted ' + this.cityList[index].name + ' from list');
		this.store.dispatch(new CitiesActions.DeleteAction(id));
	}

}
