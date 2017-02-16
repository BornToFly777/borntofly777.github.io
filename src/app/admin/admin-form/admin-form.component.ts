import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { LoggerService } from '../../core/services/logger/logger.service';

import { Store } from '@ngrx/store';
import * as FormSettingsActions from '../../actions/form.settings.actions';
import { InitialState } from '../../states';
import { FormSettingsState } from '../../states/form.settings.state';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-admin-form',
	templateUrl: './admin-form.component.html',
	styleUrls: ['./admin-form.component.css']
})
export class AdminFormComponent implements OnInit {
	private subscription: Subscription;
	public formGroup: FormGroup;

	constructor(
		private store: Store<InitialState>,
		private formBuilder: FormBuilder,
		private loggerService: LoggerService
	) { }

	ngOnInit() {
		this.subscription = this.store
		.select((s: InitialState) => s.formSettings)
		.subscribe(({formSettings}: FormSettingsState): void => {
			this.formGroup = this.formBuilder.group({
				canDelete: [formSettings.canDelete],
				showWind: [formSettings.showWind],
				coordsCount: [
					formSettings.coordsCount, 
					[
						Validators.required
					]
				],
				numberOfCities: [
					formSettings.numberOfCities,
					[
						Validators.required
					]
				]
			})
		});
	}

	submit(form) {
		this.loggerService.log('New settings were applied');
		this.store.dispatch(new FormSettingsActions.ChangeAction(form.value));
	}

}
