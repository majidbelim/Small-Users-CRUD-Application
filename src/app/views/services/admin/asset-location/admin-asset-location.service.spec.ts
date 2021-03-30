import { TestBed } from '@angular/core/testing';

import { AdminAssetLocationService } from './admin-asset-location.service';

describe('AdminAssetLocationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminAssetLocationService = TestBed.get(AdminAssetLocationService);
    expect(service).toBeTruthy();
  });
});
