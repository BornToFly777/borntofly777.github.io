import { FormSettings } from '../models/form.settings.model';

export interface FormSettingsState {
	formSettings: FormSettings
}

export const initialFormSettingsState: FormSettingsState = {
	formSettings: {
		canDelete: true,
		showWind: true,
		coordsCount: 6,
		numberOfCities: 10
	}
}