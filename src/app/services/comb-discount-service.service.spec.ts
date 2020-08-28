import { TestBed } from '@angular/core/testing';

import { CombDiscountServiceService } from './comb-discount-service.service';

describe('CombDiscountServiceService', () => {
  let service: CombDiscountServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CombDiscountServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
