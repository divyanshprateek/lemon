import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileV2Component } from './profile-v2.component';

describe('ProfileV2Component', () => {
  let component: ProfileV2Component;
  let fixture: ComponentFixture<ProfileV2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileV2Component],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
