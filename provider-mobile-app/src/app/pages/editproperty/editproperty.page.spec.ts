import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditpropertyPage } from './editproperty.page';

describe('EditpropertyPage', () => {
  let component: EditpropertyPage;
  let fixture: ComponentFixture<EditpropertyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditpropertyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditpropertyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
