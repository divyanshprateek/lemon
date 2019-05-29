import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FragmentPage } from './fragment.page';

describe('FragmentPage', () => {
  let component: FragmentPage;
  let fixture: ComponentFixture<FragmentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FragmentPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FragmentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
