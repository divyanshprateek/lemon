import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogTimelineComponent } from './blog-timeline.component';

describe('BlogTimelineComponent', () => {
  let component: BlogTimelineComponent;
  let fixture: ComponentFixture<BlogTimelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BlogTimelineComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
