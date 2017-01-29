import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-google-map',
	templateUrl: './google-map.component.html',
	styleUrls: ['./google-map.component.css']
})
export class GoogleMapComponent implements OnInit {
	latitude: number;
	longitude: number;

	constructor() { }

	ngOnInit() {
		let vm = this;

		let getMyPosition = (position:Position) => {
			vm.latitude = position.coords.latitude,
			vm.longitude = position.coords.longitude;
		};
		navigator.geolocation.getCurrentPosition(getMyPosition);
	}

}
