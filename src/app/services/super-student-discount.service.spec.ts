import { TestBed } from '@angular/core/testing';

import { SuperStudentDiscountService } from './super-student-discount.service';

describe('SuperStudentDiscountService', () => {
  let service: SuperStudentDiscountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuperStudentDiscountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
