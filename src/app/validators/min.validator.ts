import { FormControl } from '@angular/forms';

export const validateMin = (min: number) => {
	return (c:FormControl): any => {
		return c.value >= min ?
			null :
			{
				invalidMin: {min: min}
			};
	}
}
