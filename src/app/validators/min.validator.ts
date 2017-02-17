import { FormControl } from '@angular/forms';

export function validateMin(c: FormControl): {[key: string]: boolean} {
	const min = 2;

	return c.value >= min ?
		null :
		{
			invalidMin: true
		};
}