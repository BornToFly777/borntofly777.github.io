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

	constructor(
		private route: ActivatedRoute,
		private router: Router
	) { }

	ngOnInit() {

		this.route.data
			.subscribe((data: any) => {
				this.city = data.city;
			})

	}

}
