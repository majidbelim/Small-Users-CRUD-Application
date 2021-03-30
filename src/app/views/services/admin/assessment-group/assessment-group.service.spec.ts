import { TestBed } from '@angular/core/testing';

import { AssessmentGroupService } from './assessment-group.service';

describe('AssessmentGroupService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AssessmentGroupService = TestBed.get(AssessmentGroupService);
    expect(service).toBeTruthy();
  });
});
