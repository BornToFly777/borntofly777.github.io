import { Injectable } from '@angular/core';

import { Coords } from '../../../models/coords.model';

@Injectable()
export class LocationService {
	private _coords: Coords;

	constructor() { }

	getCoords(): Promise<Coords> {
		return new Promise((resolve, reject) => {
			if (this._coords) {
				resolve(this._coords);
			} else {
				let setCoords = (position:Position) => {
					this._coords = {
						lat: position.coords.latitude,
						lon: position.coords.longitude
					};
					resolve(this._coords);
				};
				navigator.geolocation.getCurrentPosition(setCoords);
			}
		});
	}
}
