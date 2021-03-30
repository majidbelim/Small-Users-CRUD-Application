import { TestBed } from '@angular/core/testing';

import { JobConfigService } from './job-config.service';

describe('JobConfigService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JobConfigService = TestBed.get(JobConfigService);
    expect(service).toBeTruthy();
  });
});
