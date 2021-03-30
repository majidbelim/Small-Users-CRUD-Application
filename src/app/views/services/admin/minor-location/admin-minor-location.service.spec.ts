import { TestBed } from '@angular/core/testing';

import { AdminMinorLocationService } from './admin-minor-location.service';

describe('AdminMinorLocationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminMinorLocationService = TestBed.get(AdminMinorLocationService);
    expect(service).toBeTruthy();
  });
});
