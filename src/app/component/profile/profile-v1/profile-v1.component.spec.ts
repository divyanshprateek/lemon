import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileV1Component } from './profile-v1.component';

describe('ProfileV1Component', () => {
  let component: ProfileV1Component;
  let fixture: ComponentFixture<ProfileV1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileV1Component],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
