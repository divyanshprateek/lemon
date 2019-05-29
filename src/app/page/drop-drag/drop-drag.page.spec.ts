import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropDragPage } from './drop-drag.page';

describe('DropDragPage', () => {
  let component: DropDragPage;
  let fixture: ComponentFixture<DropDragPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DropDragPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropDragPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
