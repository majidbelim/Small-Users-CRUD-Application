import { TestBed } from '@angular/core/testing';

import { WeekendMethodService } from './weekend-method.service';

describe('WeekendMethodService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WeekendMethodService = TestBed.get(WeekendMethodService);
    expect(service).toBeTruthy();
  });
});
