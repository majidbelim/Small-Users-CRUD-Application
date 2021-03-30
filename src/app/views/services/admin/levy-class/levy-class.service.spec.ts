import { TestBed } from '@angular/core/testing';

import { LevyClassService } from './levy-class.service';

describe('LevyClassService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LevyClassService = TestBed.get(LevyClassService);
    expect(service).toBeTruthy();
  });
});
