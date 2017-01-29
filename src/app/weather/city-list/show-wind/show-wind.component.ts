import { Component, OnInit, Input } from '@angular/core';

import { Wind } from '../../../models/wind.model';

@Component({
  selector: 'app-show-wind',
  templateUrl: './show-wind.component.html',
  styleUrls: ['./show-wind.component.css']
})
export class ShowWindComponent implements OnInit {

	@Input() wind: Wind;

	constructor() { }

	ngOnInit() {
	}

}
