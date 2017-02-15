import * as FormSettingsActions from '../actions/form.settings.actions';

import { FormSettings } from '../models/form.settings.model';

import {FormSettingsState, initialFormSettingsState} from '../states/form.settings.state';

export default function (state = initialFormSettingsState, action: FormSettingsActions.Actions): FormSettingsState {
  switch (action.type) {
    case FormSettingsActions.ActionTypes.CHANGE_SETTINGS: {
      return Object.assign({}, state, {formSettings: action.payload});
    }
    default:
      return state;
  }
}