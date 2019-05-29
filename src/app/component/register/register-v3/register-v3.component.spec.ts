import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterV3Component } from './register-v3.component';

describe('RegisterV3Component', () => {
  let component: RegisterV3Component;
  let fixture: ComponentFixture<RegisterV3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterV3Component],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterV3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
