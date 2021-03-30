import { TestBed } from '@angular/core/testing';

import { AdjustTypeService } from './adjust-type.service';

describe('AdjustTypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdjustTypeService = TestBed.get(AdjustTypeService);
    expect(service).toBeTruthy();
  });
});
