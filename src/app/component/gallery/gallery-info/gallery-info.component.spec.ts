import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryInfoComponent } from './gallery-info.component';

describe('GalleryInfoComponent', () => {
  let component: GalleryInfoComponent;
  let fixture: ComponentFixture<GalleryInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GalleryInfoComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
