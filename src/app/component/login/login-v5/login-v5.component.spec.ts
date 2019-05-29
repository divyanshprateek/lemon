import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginV5Component } from './login-v5.component';

describe('LoginV5Component', () => {
  let component: LoginV5Component;
  let fixture: ComponentFixture<LoginV5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginV5Component],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginV5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
