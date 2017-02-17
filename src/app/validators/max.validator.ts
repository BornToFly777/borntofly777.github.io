import { FormControl } from '@angular/forms';

export const validateMax = (max: number) => {
	return (c:FormControl): {[key: string]: boolean} => {
		return c.value <= max ?
			null :
			{
				invalidMax: true
			};
	}
}
