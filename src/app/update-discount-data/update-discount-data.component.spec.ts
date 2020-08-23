import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDiscountDataComponent } from './update-discount-data.component';

describe('UpdateDiscountDataComponent', () => {
  let component: UpdateDiscountDataComponent;
  let fixture: ComponentFixture<UpdateDiscountDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateDiscountDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDiscountDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
