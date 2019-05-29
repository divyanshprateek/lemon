import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropDragComponent } from './drop-drag.component';

describe('DropDragComponent', () => {
  let component: DropDragComponent;
  let fixture: ComponentFixture<DropDragComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DropDragComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropDragComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
