import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginV9Component } from './login-v9.component';

describe('LoginV9Component', () => {
  let component: LoginV9Component;
  let fixture: ComponentFixture<LoginV9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginV9Component],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginV9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
