import { TestBed } from '@angular/core/testing';

import { VintageOptionService } from './vintage-option.service';

describe('VintageOptionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VintageOptionService = TestBed.get(VintageOptionService);
    expect(service).toBeTruthy();
  });
});
