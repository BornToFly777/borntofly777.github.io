import { Action } from '@ngrx/store';
import { FormSettings } from '../models/form.settings.model';

export const ActionTypes = {
  CHANGE_SETTINGS: '[FORM_SETTINGS] CHANGE_SETTINGS'
};

export class ChangeAction implements Action {
  type = ActionTypes.CHANGE_SETTINGS;

  constructor(public payload: FormSettings) {
  }
}

export type Actions
  = ChangeAction;