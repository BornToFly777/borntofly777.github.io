import { Action } from '@ngrx/store';
import { City } from '../models/city.model';

export const ActionTypes = {
  SETUP_CITIES: '[CITIES] SETUP',
  LOAD: '[CITIES] LOAD',
  DELETE: '[CITIES] DELETE',
  FAVOURITE: '[CITIES] FAVOURITE'
};

export class SetupAction implements Action {
  type = ActionTypes.SETUP_CITIES;

  constructor(public payload: Array<City>) {
  }
}

export class LoadAction implements Action {
  type = ActionTypes.LOAD;

  constructor(public payload: Array<City>) {
  }
}

export class DeleteAction implements Action {
  type = ActionTypes.DELETE;

  constructor(public payload: Array<City>) {
  }
}

export class FavouriteAction implements Action {
  type = ActionTypes.FAVOURITE;

  constructor(public payload: Array<City>) {
  }
}

export type Actions
  = SetupAction
  | LoadAction
  | DeleteAction
  | FavouriteAction;