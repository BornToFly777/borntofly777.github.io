import * as CitiesActions from '../actions/cities.actions';

import {CitiesState, initialCitiesState} from '../states/cities.state';

export default function (state = initialCitiesState, action: CitiesActions.Actions): CitiesState {
  switch (action.type) {
    case CitiesActions.ActionTypes.SETUP_CITIES: {
      return Object.assign({}, state, {cities: action.payload});
    }
    case CitiesActions.ActionTypes.DELETE: {
      const {cities} = state;

      return Object.assign({}, state, {cities: []});
    }
    case CitiesActions.ActionTypes.FAVOURITE: {
      const {cities} = state;

      return Object.assign({}, state, {cities: []});
    }
    default:
      return state;
  }
}