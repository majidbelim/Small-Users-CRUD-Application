import { TestBed } from '@angular/core/testing';

import { CaseSetupService } from './case-setup.service';

describe('CaseSetupService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CaseSetupService = TestBed.get(CaseSetupService);
    expect(service).toBeTruthy();
  });
});
