/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HarmmerComponent } from './harmmer.component';

describe('HarmmerComponent', () => {
  let component: HarmmerComponent;
  let fixture: ComponentFixture<HarmmerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HarmmerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HarmmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
