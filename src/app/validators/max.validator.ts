import { FormControl } from '@angular/forms';

export const validateMax = (max: number) => {
	return (c:FormControl): any => {
		return c.value <= max ?
			null :
			{
				invalidMax: {max: max}
			};
	}
}
