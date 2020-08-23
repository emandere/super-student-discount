import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestDiscountDataComponent } from './test-discount-data.component';

describe('TestDiscountDataComponent', () => {
  let component: TestDiscountDataComponent;
  let fixture: ComponentFixture<TestDiscountDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestDiscountDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestDiscountDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
