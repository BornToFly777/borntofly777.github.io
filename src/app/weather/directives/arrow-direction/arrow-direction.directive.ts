import { Directive, Input, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[arrowDirection]'
})
export class ArrowDirectionDirective implements OnInit {

	@Input('arrowDirection') deg: number;

	constructor(private el: ElementRef) { }

	ngOnInit() {
		this.el.nativeElement.style.transform = 'rotate(' + this.deg + 'deg)'
	}

}
