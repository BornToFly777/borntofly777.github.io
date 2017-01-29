import { Component, OnInit } from '@angular/core';

import { LocationService } from '../../core/services/location/location.service';

import { Coords } from '../../models/coords.model';

@Component({
	selector: 'app-google-map',
	templateUrl: './google-map.component.html',
	styleUrls: ['./google-map.component.css']
})
export class GoogleMapComponent implements OnInit {
	latitude: number;
	longitude: number;

	constructor(private locationService: LocationService) { }

	ngOnInit() {
		let vm = this;

		vm.locationService.getCoords().then(coords => {
			vm.latitude = coords.lat;
			vm.longitude = coords.lon;
		});
	}

}
