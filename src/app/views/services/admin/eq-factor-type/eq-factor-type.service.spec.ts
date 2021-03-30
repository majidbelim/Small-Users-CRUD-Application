import { TestBed } from '@angular/core/testing';

import { EqFactorTypeService } from './eq-factor-type.service';

describe('EqFactorTypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EqFactorTypeService = TestBed.get(EqFactorTypeService);
    expect(service).toBeTruthy();
  });
});
