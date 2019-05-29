import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverViewComponent } from './popover-view.component';

describe('PopoverViewComponent', () => {
  let component: PopoverViewComponent;
  let fixture: ComponentFixture<PopoverViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PopoverViewComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
