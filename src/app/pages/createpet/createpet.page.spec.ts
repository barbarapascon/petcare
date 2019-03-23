import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatepetPage } from './createpet.page';

describe('CreatepetPage', () => {
  let component: CreatepetPage;
  let fixture: ComponentFixture<CreatepetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatepetPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatepetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
