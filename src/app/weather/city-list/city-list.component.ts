import { Component, OnInit } from '@angular/core';

import { City } from '../../models/city.model';
import { FormSettings } from '../../models/form.settings.model';

import { LoggerService } from '../../core/services/logger/logger.service';

import { Store } from '@ngrx/store';
import * as CitiesActions from '../../actions/cities.actions';
import { InitialState } from '../../states';
import { CitiesState } from '../../states/cities.state';
import { FormSettingsState } from '../../states/form.settings.state';
import { Subscription } from 'rxjs';
import {Router, ActivatedRoute, Params} from "@angular/router";

@Component({
	selector: 'app-city-list',
	templateUrl: './city-list.component.html',
	styleUrls: ['./city-list.component.css']
})
export class CityListComponent implements OnInit {
	private subscription: Subscription;
	private subscription2: Subscription;
	private cityList: Array<City>;
	private formSettings: FormSettings;

	constructor(
		private store: Store<InitialState>,
		private loggerService: LoggerService,
		private route: ActivatedRoute,
		private router: Router
	) { }

	ngOnInit() {
		this.subscription = this.store
				.select((s: InitialState) => s.cities)
				.subscribe(({cities}: CitiesState): void => {
					this.cityList = cities;
				});

		this.subscription2 = this.store
				.select((s: InitialState) => s.formSettings)
				.subscribe(({formSettings}: FormSettingsState): void => {
					this.formSettings = formSettings;
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

	onSelect(city: City) {
		this.router.navigate([city.id], {relativeTo: this.route});
	}

}
