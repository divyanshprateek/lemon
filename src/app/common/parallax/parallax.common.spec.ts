import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParallaxCommon } from './parallax.common';

describe('ParallaxCommon', () => {
  let component: ParallaxCommon;
  let fixture: ComponentFixture<ParallaxCommon>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ParallaxCommon],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParallaxCommon);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
