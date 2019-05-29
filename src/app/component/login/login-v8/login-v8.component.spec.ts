import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginV8Component } from './login-v8.component';

describe('LoginV8Component', () => {
  let component: LoginV8Component;
  let fixture: ComponentFixture<LoginV8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginV8Component],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginV8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
