import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';

import { City } from './../../city.model';

@Component({
  selector: 'app-city-weather',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './city-weather.component.html',
  styleUrls: ['./city-weather.component.css']
})
export class CityWeatherComponent{

  @Input() cityWeather: City;
  @Output() markFavouriteCity: EventEmitter<number>;
  @Output() deleteCurrentCity: EventEmitter<number>;

  constructor() {
  	this.markFavouriteCity = new EventEmitter<number>();
    this.deleteCurrentCity = new EventEmitter<number>();
  }

  markFafourite(): void {
  	this.markFavouriteCity.emit(this.cityWeather.id);
  }

  deleteCity(): void {
    this.deleteCurrentCity.emit(this.cityWeather.id);
  }
}
