import { Directive, Input, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[paintCity]'
})
export class PaintCityDirective implements OnInit {
	@Input('paintCity') temp: number;

	constructor(private el: ElementRef) { }

	ngOnInit() {
		let getColorByTemp = (tempF: number) => {
			const KELVIN_CELSIY_DIFFERENCE = -273.15;
			let color: string;
			let tempC: number = tempF + KELVIN_CELSIY_DIFFERENCE;

			if (tempC < -10) {
				color = 'blue';
			} else if (tempC < 10 ) {
				color = 'green';
			} else {
				color = 'red';
			}

			return color;
		}

		this.el.nativeElement.style.backgroundColor = getColorByTemp(this.temp);
	}

}
