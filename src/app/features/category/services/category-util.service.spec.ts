import { TestBed } from '@angular/core/testing';

import { CategoryUtilService } from './category-util.service';

describe('CategoryUtilService', () => {
  let service: CategoryUtilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoryUtilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
