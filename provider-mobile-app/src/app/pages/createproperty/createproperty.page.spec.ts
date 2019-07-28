import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatepropertyPage } from './createproperty.page';

describe('CreatepropertyPage', () => {
  let component: CreatepropertyPage;
  let fixture: ComponentFixture<CreatepropertyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatepropertyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatepropertyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
