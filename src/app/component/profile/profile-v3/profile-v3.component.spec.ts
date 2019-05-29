import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileV3Component } from './profile-v3.component';

describe('ProfileV3Component', () => {
  let component: ProfileV3Component;
  let fixture: ComponentFixture<ProfileV3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileV3Component],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileV3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
