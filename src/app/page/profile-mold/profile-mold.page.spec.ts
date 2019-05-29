import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileMoldPage } from './profile-mold.page';

describe('ProfileMoldPage', () => {
  let component: ProfileMoldPage;
  let fixture: ComponentFixture<ProfileMoldPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileMoldPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileMoldPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
