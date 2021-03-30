import { TestBed } from '@angular/core/testing';

import { FunctionUmService } from './function-um.service';

describe('FunctionUmService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FunctionUmService = TestBed.get(FunctionUmService);
    expect(service).toBeTruthy();
  });
});
