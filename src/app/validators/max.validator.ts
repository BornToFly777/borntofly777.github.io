import { FormControl } from '@angular/forms';

export function validateMax(c: FormControl): {[key: string]: boolean} {
	const max = 6;

	return c.value <= max ?
		null :
		{
			invalidMax: true
		};
}