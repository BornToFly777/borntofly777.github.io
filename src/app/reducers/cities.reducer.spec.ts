import * as CitiesActions from '../actions/cities.actions';
import { initialCitiesState } from '../states/cities.state';

import citiesReducer from './cities.reducer';

describe('counter reducers', () => {
	let city = {
		name: 'Minsk',
		main: {
			temp: '273.15'
		},
		coord: {
			lat: 55.888888,
			lon: 66.999999
		},
		favourite: false,
		id: 555,
		wind: {
			deg: 0,
			speed: 4
		},
		weather: [{
			id: 12,
			icon: '01n'
		}]
	};

	it('should handle initial state', () => {
		let defaultAction = {
			type: undefined,
			payload: undefined
		};

		expect(citiesReducer(undefined, defaultAction)).toEqual(initialCitiesState);
	});

	it('should setup cities', () => {
		let setupAction = {
			type: CitiesActions.ActionTypes.SETUP_CITIES,
			payload: [city]
		};

		expect(citiesReducer(initialCitiesState, setupAction)).toEqual({cities: [city]});
	});

	it('should delete city', () => {
		let deleteAction = {
			type: CitiesActions.ActionTypes.DELETE,
			payload: 555
		};

		expect(citiesReducer({cities: [city]}, deleteAction)).toEqual({cities: []});
	});

	it('should mark city as favourite', () => {
		let favouriteAction = {
			type: CitiesActions.ActionTypes.FAVOURITE,
			payload: 555
		};

		let expectedCity = {
			name: 'Minsk',
			main: {
				temp: '273.15'
			},
			coord: {
				lat: 55.888888,
				lon: 66.999999
			},
			favourite: true,
			id: 555,
			wind: {
				deg: 0,
				speed: 4
			},
			weather: [{
				id: 12,
				icon: '01n'
			}]
		};

		expect(citiesReducer({cities: [city]}, favouriteAction)).toEqual({cities: [expectedCity]});
	});

	it('should return default state on unknown action', () => {
		let unknownAction = {
			type: 'unknownAction',
			payload: undefined
		};

		let defaultState = {cities: [city]};

		expect(citiesReducer(defaultState, unknownAction)).toEqual(defaultState);
	});
});