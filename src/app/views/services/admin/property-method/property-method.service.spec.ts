import { TestBed } from '@angular/core/testing';

import { PropertyMethodService } from './property-method.service';

describe('PropertyMethodService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PropertyMethodService = TestBed.get(PropertyMethodService);
    expect(service).toBeTruthy();
  });
});
