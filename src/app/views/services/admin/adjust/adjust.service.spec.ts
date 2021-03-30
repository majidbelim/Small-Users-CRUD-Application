import { TestBed } from '@angular/core/testing';

import { AdjustService } from './adjust.service';

describe('AdjustService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdjustService = TestBed.get(AdjustService);
    expect(service).toBeTruthy();
  });
});
