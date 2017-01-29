import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[customIf]'
})
export class CustomIfDirective {

	@Input() set customIf (value) {
		if (value) {
			this.viewContainer.createEmbeddedView(this.template);
		} else {
			this.viewContainer.clear();
		}
	}

	constructor(
		private template: TemplateRef<Object>,
		private viewContainer: ViewContainerRef
	) { }

}
