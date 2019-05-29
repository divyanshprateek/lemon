import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidesMoldComponent } from './slides-mold.component';

describe('SlidesMoldComponent', () => {
  let component: SlidesMoldComponent;
  let fixture: ComponentFixture<SlidesMoldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SlidesMoldComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidesMoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
