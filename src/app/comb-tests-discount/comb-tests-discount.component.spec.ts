import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CombTestsDiscountComponent } from './comb-tests-discount.component';

describe('CombTestsDiscountComponent', () => {
  let component: CombTestsDiscountComponent;
  let fixture: ComponentFixture<CombTestsDiscountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CombTestsDiscountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CombTestsDiscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
