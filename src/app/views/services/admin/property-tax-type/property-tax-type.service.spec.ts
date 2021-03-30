import { TestBed } from '@angular/core/testing';

import { PropertyTaxTypeService } from './property-tax-type.service';

describe('PropertyTaxTypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PropertyTaxTypeService = TestBed.get(PropertyTaxTypeService);
    expect(service).toBeTruthy();
  });
});
