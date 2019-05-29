import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmobComponent } from './admob.component';

describe('AdmobComponent', () => {
  let component: AdmobComponent;
  let fixture: ComponentFixture<AdmobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdmobComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
