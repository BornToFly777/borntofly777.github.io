import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs';
import * as CitiesActions from '../actions/cities.actions';
import { WeatherService } from '../core/services/weather/weather.service';

@Injectable()
export class CitiesEffects {
	constructor(private actions$: Actions, private weatherService: WeatherService) {
	}

	@Effect() load$ = this.actions$
		.ofType(CitiesActions.ActionTypes.LOAD)
		.map(action => action.payload)
		.switchMap(() => this.weatherService.getWeather()
			.map(res => (new CitiesActions.SetupAction(res)))
			.catch(() => Observable.of({type: 'LOAD_FAILED'}))
		);
}