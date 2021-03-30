import { TestBed } from '@angular/core/testing';

import { ParcelTypeService } from './parcel-type.service';

describe('ParcelTypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ParcelTypeService = TestBed.get(ParcelTypeService);
    expect(service).toBeTruthy();
  });
});
