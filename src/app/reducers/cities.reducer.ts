import * as CitiesActions from '../actions/cities.actions';

import * as _ from 'lodash';

import { City } from '../models/city.model';

import {CitiesState, initialCitiesState} from '../states/cities.state';

export default function (state = initialCitiesState, action: CitiesActions.Actions): CitiesState {
  switch (action.type) {
    case CitiesActions.ActionTypes.SETUP_CITIES: {
      return Object.assign({}, state, {cities: action.payload});
    }
    case CitiesActions.ActionTypes.DELETE: {
      const {cities} = state;

      let cloneListCities:Array<City> = _.filter(cities, (city) => { return city.id !== action.payload});

      return Object.assign({}, state, {cities: cloneListCities});
    }
    case CitiesActions.ActionTypes.FAVOURITE: {
      const {cities} = state;

      let cloneListCities:Array<City> = cities.map(city => city.id === action.payload ?
        Object.assign({}, city, {favourite: true}) : Object.assign({}, city, {favourite: false}));

      return Object.assign({}, state, {cities: cloneListCities});
    }
    default:
      return state;
  }
}