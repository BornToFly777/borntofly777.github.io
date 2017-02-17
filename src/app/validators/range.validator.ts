import { FormControl } from '@angular/forms';

export function validateRange(c: FormControl): {[key: string]: boolean} {
	const min = 3,
		max = 10;

	return c.value >= min && c.value <= max ?
		null :
		{
			invalidRange: true
		};
}