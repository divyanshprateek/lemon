import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileV5Component } from './profile-v5.component';

describe('ProfileV5Component', () => {
  let component: ProfileV5Component;
  let fixture: ComponentFixture<ProfileV5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileV5Component],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileV5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
