/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Weather } from '../../../models/weather.model';

import { ShowIconComponent } from './show-icon.component';

describe('ShowIconComponent', () => {
  let component: ShowIconComponent;
  let fixture: ComponentFixture<ShowIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowIconComponent);
    component = fixture.componentInstance;

    let weather: Weather = {'id': 12, 'icon': '01n'};
    component.weatherDescription = weather;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
