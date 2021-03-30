import { TestBed } from '@angular/core/testing';

import { ChargeTypeService } from './charge-type.service';

describe('ChargeTypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChargeTypeService = TestBed.get(ChargeTypeService);
    expect(service).toBeTruthy();
  });
});
