import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginV4Component } from './login-v4.component';

describe('LoginV4Component', () => {
  let component: LoginV4Component;
  let fixture: ComponentFixture<LoginV4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginV4Component],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginV4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
