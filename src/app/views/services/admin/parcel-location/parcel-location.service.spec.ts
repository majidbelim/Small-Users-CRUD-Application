import { TestBed } from '@angular/core/testing';

import { ParcelLocationService } from './parcel-location.service';

describe('ParcelLocationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ParcelLocationService = TestBed.get(ParcelLocationService);
    expect(service).toBeTruthy();
  });
});
