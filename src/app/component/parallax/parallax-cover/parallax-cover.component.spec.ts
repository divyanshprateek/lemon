
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParallaxCoverComponent } from './parallax-cover.component';

describe('ParallaxCoverComponent', () => {
  let component: ParallaxCoverComponent;
  let fixture: ComponentFixture<ParallaxCoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ParallaxCoverComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParallaxCoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
