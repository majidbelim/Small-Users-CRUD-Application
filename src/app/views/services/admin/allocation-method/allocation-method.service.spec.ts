import { TestBed } from '@angular/core/testing';

import { AllocationMethodService } from './allocation-method.service';

describe('AllocationMethodService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AllocationMethodService = TestBed.get(AllocationMethodService);
    expect(service).toBeTruthy();
  });
});
