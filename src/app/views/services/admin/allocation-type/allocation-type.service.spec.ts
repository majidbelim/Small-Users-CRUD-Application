import { TestBed } from '@angular/core/testing';

import { AllocationTypeService } from './allocation-type.service';

describe('AllocationTypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AllocationTypeService = TestBed.get(AllocationTypeService);
    expect(service).toBeTruthy();
  });
});
