import { TestBed } from '@angular/core/testing';

import { CalculationMethodsService } from './calculation-methods.service';

describe('CalculationMethodsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CalculationMethodsService = TestBed.get(CalculationMethodsService);
    expect(service).toBeTruthy();
  });
});
