import { TestBed } from '@angular/core/testing';

import { PtProcessStatusService } from './pt-process-status.service';

describe('PtProcessStatusService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PtProcessStatusService = TestBed.get(PtProcessStatusService);
    expect(service).toBeTruthy();
  });
});
