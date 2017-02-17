import { Component, OnInit, Input } from '@angular/core';

import * as _ from 'lodash';

@Component({
	selector: 'validation-errors',
	templateUrl: './validation-errors.component.html',
	styleUrls: ['./validation-errors.component.css']
})
export class ValidationErrorsComponent implements OnInit {
	public errorMessage: string;

	@Input() errors: any;

	constructor() { }

	ngOnInit() {
	}

	ngOnChanges(changes: any) {
		const currentErrors: any = _.get(changes, 'errors.currentValue');

		if (currentErrors) {
			if (currentErrors.required) {
				this.errorMessage = 'This field should not be empty';
			} else if (currentErrors.invalidMin) {
				this.errorMessage = 'Value should be equal or more than ' + currentErrors.invalidMin.min;
			} else if (currentErrors.invalidMax) {
				this.errorMessage = 'Value should be equal or less than ' + currentErrors.invalidMax.max;
			} else if (currentErrors.invalidRange) {
				this.errorMessage = 'Value shoud be between ' + currentErrors.invalidRange.min + 
				' and ' + currentErrors.invalidRange.max;
			} else {
				this.errorMessage = 'Unknown error';
			}
		} else {
			this.errorMessage = ''
		}
	}

}
