import { TestBed } from '@angular/core/testing';

import { ReverseFactorTypeService } from './reverse-factor-type.service';

describe('ReverseFactorTypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReverseFactorTypeService = TestBed.get(ReverseFactorTypeService);
    expect(service).toBeTruthy();
  });
});
