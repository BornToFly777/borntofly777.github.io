import { FormControl } from '@angular/forms';

export const validateRange = (min: number, max: number) => {
	return (c:FormControl): {[key: string]: boolean} => {
		return c.value >= min && c.value <= max ?
			null :
			{
				invalidRange: true
			};
	}
}
