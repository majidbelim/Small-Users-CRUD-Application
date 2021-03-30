import { TestBed } from '@angular/core/testing';

import { ReserveMethodService } from './reserve-method.service';

describe('ReserveMethodService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReserveMethodService = TestBed.get(ReserveMethodService);
    expect(service).toBeTruthy();
  });
});
