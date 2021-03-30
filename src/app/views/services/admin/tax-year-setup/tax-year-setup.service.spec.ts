import { TestBed } from '@angular/core/testing';

import { TaxYearSetupService } from './tax-year-setup.service';

describe('TaxYearSetupService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TaxYearSetupService = TestBed.get(TaxYearSetupService);
    expect(service).toBeTruthy();
  });
});
