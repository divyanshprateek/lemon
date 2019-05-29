import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterV2Component } from './register-v2.component';

describe('RegisterV2Component', () => {
  let component: RegisterV2Component;
  let fixture: ComponentFixture<RegisterV2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterV2Component],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
