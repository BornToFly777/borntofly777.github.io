import { City } from '../models/city.model';

export interface CitiesState {
	cities: Array<City>
}

export const initialCitiesState: CitiesState = {
	cities: []
}