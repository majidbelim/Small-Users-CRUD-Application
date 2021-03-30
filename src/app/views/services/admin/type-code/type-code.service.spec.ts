import { TestBed } from '@angular/core/testing';

import { TypeCodeService } from './type-code.service';

describe('TypeCodeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TypeCodeService = TestBed.get(TypeCodeService);
    expect(service).toBeTruthy();
  });
});
