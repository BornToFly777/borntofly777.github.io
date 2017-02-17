import { FormControl } from '@angular/forms';

export const validateMin = (min: number) => {
	return (c:FormControl): {[key: string]: boolean} => {
		return c.value >= min ?
			null :
			{
				invalidMin: true
			};
	}
}
