import { TestBed } from '@angular/core/testing';

import { InstallmentTypeService } from './installment-type.service';

describe('InstallmentTypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InstallmentTypeService = TestBed.get(InstallmentTypeService);
    expect(service).toBeTruthy();
  });
});
