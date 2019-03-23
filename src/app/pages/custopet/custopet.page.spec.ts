import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustopetPage } from './custopet.page';

describe('CustopetPage', () => {
  let component: CustopetPage;
  let fixture: ComponentFixture<CustopetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustopetPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustopetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
