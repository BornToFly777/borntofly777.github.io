import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';

import { City } from '../../../models/city.model';
import { FormSettings } from '../../../models/form.settings.model';

@Component({
  selector: 'app-city-weather',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './city-weather.component.html',
  styleUrls: ['./city-weather.component.css']
})
export class CityWeatherComponent{

  @Input() cityWeather: City;
  @Input() index: number;
  @Input() settings: FormSettings;
  @Output() markFavouriteCity: EventEmitter<number>;
  @Output() deleteCurrentCity: EventEmitter<number>;
  @Output() onSelect: EventEmitter<City>;

  constructor() {
  	this.markFavouriteCity = new EventEmitter<number>();
    this.deleteCurrentCity = new EventEmitter<number>();
    this.onSelect = new EventEmitter<City>();
  }

  get fractional() { return '.' + this.settings.coordsCount + '-' + this.settings.coordsCount }

  markFafourite(): void {
  	this.markFavouriteCity.emit(this.cityWeather.id);
  }

  deleteCity(): void {
    this.deleteCurrentCity.emit(this.cityWeather.id);
  }

  onSelectCity(): void {
    this.onSelect.emit(this.cityWeather);
  }
}
