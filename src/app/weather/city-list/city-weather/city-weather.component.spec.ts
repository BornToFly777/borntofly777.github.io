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

    let expectedSettings = {
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
});
