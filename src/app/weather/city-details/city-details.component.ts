import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from "@angular/router";

import * as _ from 'lodash';

import { Store } from '@ngrx/store';
import { InitialState } from '../../states';
import { CitiesState } from '../../states/cities.state';
import { Subscription } from 'rxjs';

import { City } from '../../models/city.model';

@Component({
	selector: 'app-city-details',
	templateUrl: './city-details.component.html',
	styleUrls: ['./city-details.component.css']
})

export class CityDetailsComponent implements OnInit {
	private subscription: Subscription;
	city: City;
	cityList: Array<City>;
	selectedId: number;

	constructor(
		private store: Store<InitialState>,
		private route: ActivatedRoute,
		private router: Router
	) { }

	ngOnInit() {

		let refresh = () => {
			this.city = _.find(this.cityList, {id: this.selectedId});

			if (!this.city) {
				this.router.navigate(['../'], {relativeTo: this.route});
			}
		}

		this.route.params
			.subscribe((params: any) => {
				this.selectedId = Number(params.id);

				if (this.cityList) {
					refresh();
				}
			})

		this.subscription = this.store
				.select((s: InitialState) => s.cities)
				.subscribe(({cities}: CitiesState): void => {
					this.cityList = cities;

					if (this.selectedId) {
						refresh();
					}
				});


	}

}
