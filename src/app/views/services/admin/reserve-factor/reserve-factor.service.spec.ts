import { TestBed } from '@angular/core/testing';

import { ReserveFactorService } from './reserve-factor.service';

describe('ReserveFactorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReserveFactorService = TestBed.get(ReserveFactorService);
    expect(service).toBeTruthy();
  });
});
