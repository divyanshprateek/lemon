import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginV6Component } from './login-v6.component';

describe('LoginV6Component', () => {
  let component: LoginV6Component;
  let fixture: ComponentFixture<LoginV6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginV6Component],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginV6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
