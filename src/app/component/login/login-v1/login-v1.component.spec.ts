import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginV1Component } from './login-v1.component';

describe('LoginV1Component', () => {
  let component: LoginV1Component;
  let fixture: ComponentFixture<LoginV1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginV1Component],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
