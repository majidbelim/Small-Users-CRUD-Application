import { TestBed } from '@angular/core/testing';

import { EscalatedValueTypeService } from './escalated-value-type.service';

describe('EscalatedValueTypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EscalatedValueTypeService = TestBed.get(EscalatedValueTypeService);
    expect(service).toBeTruthy();
  });
});
