import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterV1Component } from './register-v1.component';

describe('RegisterV1Component', () => {
  let component: RegisterV1Component;
  let fixture: ComponentFixture<RegisterV1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterV1Component],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
