import { ActionReducer, combineReducers } from '@ngrx/store';
import { compose } from '@ngrx/core/compose';
import citiesReducer from './cities.reducer';
import formSettingsReducer from './form.settings.reducer';
import { InitialState } from '../states';

const reducers = {
	cities: citiesReducer,
	formSettings: formSettingsReducer
};

const devReducer: ActionReducer<InitialState> = compose(combineReducers)(reducers);

export function reducer(state: any, action: any) {
	return devReducer(state, action);
}