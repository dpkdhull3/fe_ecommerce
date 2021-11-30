import { TestBed } from '@angular/core/testing';

import { CategoryCRUDService } from './category-crud.service';

describe('CategoryCRUDService', () => {
  let service: CategoryCRUDService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoryCRUDService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
