import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginMoldPage } from './login-mold.page';

describe('LoginMoldPage', () => {
  let component: LoginMoldPage;
  let fixture: ComponentFixture<LoginMoldPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginMoldPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginMoldPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
