import { FormControl } from '@angular/forms';

export const validateRange = (min: number, max: number) => {
	return (c:FormControl): any => {
		return c.value >= min && c.value <= max ?
			null :
			{
				invalidRange: {
					min: min,
					max: max
				}
			};
	}
}
