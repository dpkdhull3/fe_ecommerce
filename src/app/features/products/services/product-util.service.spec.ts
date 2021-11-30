import { TestBed } from '@angular/core/testing';

import { ProductUtilService } from './product-util.service';

describe('ProductUtilService', () => {
  let service: ProductUtilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductUtilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
