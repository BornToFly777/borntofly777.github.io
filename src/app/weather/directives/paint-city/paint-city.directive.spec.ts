/* tslint:disable:no-unused-variable */

import { Component } from '@angular/core';
import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { PaintCityDirective } from './paint-city.directive';

@Component({
  template: `
  <h2 [paintCity]="blueColor"></h2>
  <h2 [paintCity]="greenColor"></h2>
  <h2 [paintCity]="redColor"></h2>`
})
class TestComponent {
  blueColor: number;
  greenColor: number;
  redColor: number;

  constructor() {
    this.blueColor = 260;
    this.greenColor = 275;
    this.redColor = 290;
  }
}

describe('PaintCityDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let allInputs;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
        declarations: [ PaintCityDirective, TestComponent ]
      })
      .createComponent(TestComponent);
    fixture.detectChanges();

    allInputs = fixture.debugElement.queryAll(By.directive(PaintCityDirective));
  });

  it('should have three painted elements', () => {
    expect(allInputs.length).toBe(3);
  });

  it('first element should be painted with blue', () => {
    const bgColor = allInputs[0].nativeElement.style.backgroundColor;
    expect(bgColor).toBe('blue');
  });

  it('second element should be painted with green', () => {
    const bgColor = allInputs[1].nativeElement.style.backgroundColor;
    expect(bgColor).toBe('green');
  });

  it('third element should be painted with red', () => {
    const bgColor = allInputs[2].nativeElement.style.backgroundColor;
    expect(bgColor).toBe('red');
  });
});
