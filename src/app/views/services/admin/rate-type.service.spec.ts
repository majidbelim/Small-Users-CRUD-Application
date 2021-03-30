import { TestBed } from '@angular/core/testing';

import { RateTypeService } from './rate-type.service';

describe('RateTypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RateTypeService = TestBed.get(RateTypeService);
    expect(service).toBeTruthy();
  });
});
