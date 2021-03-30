import { TestBed } from '@angular/core/testing';

import { CaseTypeService } from './case-type.service';

describe('CaseTypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CaseTypeService = TestBed.get(CaseTypeService);
    expect(service).toBeTruthy();
  });
});
