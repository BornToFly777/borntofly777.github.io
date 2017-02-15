import { CitiesState } from './cities.state';
import { FormSettingsState } from './form.settings.state';

export interface InitialState {
  cities: CitiesState;
  formSettings: FormSettingsState;
}
