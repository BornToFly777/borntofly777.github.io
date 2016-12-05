import { Component, OnInit, Input } from '@angular/core';

import { City } from './../../city.model';

@Component({
  selector: 'app-city-weather',
  templateUrl: './city-weather.component.html',
  styleUrls: ['./city-weather.component.css']
})
export class CityWeatherComponent implements OnInit {

  @Input() cityWeather: City;

  constructor() { }

  ngOnInit() {
  }

}
