import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginV2Component } from './login-v2.component';

describe('LoginV2Component', () => {
  let component: LoginV2Component;
  let fixture: ComponentFixture<LoginV2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginV2Component],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
