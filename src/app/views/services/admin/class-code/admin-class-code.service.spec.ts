import { TestBed } from '@angular/core/testing';

import { AdminClassCodeService } from './admin-class-code.service';

describe('AdminClassCodeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminClassCodeService = TestBed.get(AdminClassCodeService);
    expect(service).toBeTruthy();
  });
});
