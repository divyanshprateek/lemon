import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileV4Component } from './profile-v4.component';

describe('ProfileV4Component', () => {
  let component: ProfileV4Component;
  let fixture: ComponentFixture<ProfileV4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileV4Component],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileV4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
