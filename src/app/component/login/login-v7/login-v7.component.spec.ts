import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginV7Component } from './login-v7.component';

describe('LoginV7Component', () => {
  let component: LoginV7Component;
  let fixture: ComponentFixture<LoginV7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginV7Component],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginV7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
