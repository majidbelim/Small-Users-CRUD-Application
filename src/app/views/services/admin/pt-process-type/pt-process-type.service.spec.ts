import { TestBed } from '@angular/core/testing';

import { PtProcessTypeService } from './pt-process-type.service';

describe('PtProcessTypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PtProcessTypeService = TestBed.get(PtProcessTypeService);
    expect(service).toBeTruthy();
  });
});
