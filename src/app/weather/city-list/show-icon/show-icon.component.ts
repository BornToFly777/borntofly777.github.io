import { Component, OnInit, Input } from '@angular/core';

import { Weather } from '../../../models/weather.model';

@Component({
  selector: 'app-show-icon',
  templateUrl: './show-icon.component.html',
  styleUrls: ['./show-icon.component.css']
})
export class ShowIconComponent implements OnInit {

	@Input() weatherDescription: Weather;

	constructor() { }

	ngOnInit() {
  }

}
