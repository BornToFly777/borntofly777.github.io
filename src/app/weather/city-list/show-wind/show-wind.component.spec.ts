/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ShowWindComponent } from './show-wind.component';

xdescribe('ShowWindComponent', () => {
  let component: ShowWindComponent;
  let fixture: ComponentFixture<ShowWindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowWindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowWindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
