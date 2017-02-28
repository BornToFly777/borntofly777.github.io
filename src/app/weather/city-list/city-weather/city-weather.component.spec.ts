/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { City } from '../../../models/city.model';
import { FormSettings } from '../../../models/form.settings.model';

import { PaintCityDirective } from '../../directives/paint-city/paint-city.directive';
import { CustomIfDirective } from '../../../shared/directives/custom-if/custom-if.directive';
import { TemperatureConverterPipe } from '../../pipes/temperatureConverter.pipe';
import { ShowWindComponent } from '../show-wind/show-wind.component';
import { ArrowDirectionDirective } from '../../directives/arrow-direction/arrow-direction.directive';
import { ShowIconComponent } from '../show-icon/show-icon.component';
import { CityWeatherComponent } from './city-weather.component';

describe('CityWeatherComponent', () => {
  let component: CityWeatherComponent;
  let fixture: ComponentFixture<CityWeatherComponent>;
  let expectedCity: City;
  let expectedSettings: FormSettings;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        CityWeatherComponent, 
        PaintCityDirective,
        CustomIfDirective,
        TemperatureConverterPipe,
        ShowWindComponent,
        ArrowDirectionDirective,
        ShowIconComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityWeatherComponent);
    component = fixture.componentInstance;

    expectedCity = {
      name: 'Minsk',
      main: {
        temp: '273.15'
      },
      coord: {
        lat: 55.888888,
        lon: 66.999999
      },
      favourite: false,
      id: 555,
      wind: {
        deg: 0,
        speed: 4
      },
      weather: [{
        id: 12,
        icon: '01n'
      }]
    };
    component.cityWeather = expectedCity;
    component.index = 1;

    expectedSettings = {
      canDelete: true,
      showWind: true,
      coordsCount: 4,
      numberOfCities: 6,
      temp: 'kelvin'
    };
    component.settings = expectedSettings;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set city name correctly', () => {
    let cityEl = fixture.debugElement.query(By.css('.city-name'));

    expect(cityEl.nativeElement.textContent).toBe(expectedCity.name.toUpperCase());
  });

  it('should set show city coordinates correctly', () => {
    let coordinatesEl = fixture.debugElement.query(By.css('.city-coordinates'));

    expect(coordinatesEl.nativeElement.textContent).toBe('(lat: ' + expectedCity.coord.lat.toFixed(expectedSettings.coordsCount) +
      ', lon: ' + expectedCity.coord.lon.toFixed(expectedSettings.coordsCount) + ')');
  });

  it('should emit delete event with correct id of the city', () => {

    let deleteSpy = spyOn(component.deleteCurrentCity, 'emit');

    component.deleteCity();
    expect(component.deleteCurrentCity.emit).toHaveBeenCalledWith(expectedCity.id);
  });

  it('should emit favourite event with correct id of the city', () => {

    let favouriteSpy = spyOn(component.markFavouriteCity, 'emit');

    component.markFafourite();
    expect(component.markFavouriteCity.emit).toHaveBeenCalledWith(expectedCity.id);
  });

  it('should provide correct selected city', () => {

    let selectedSpy = spyOn(component.onSelect, 'emit');

    component.onSelectCity();
    expect(component.onSelect.emit).toHaveBeenCalledWith(expectedCity);
  });
});
