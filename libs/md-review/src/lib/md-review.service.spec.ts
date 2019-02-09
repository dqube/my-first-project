import { TestBed } from '@angular/core/testing';

import { MdReviewService } from './md-review.service';

describe('MdReviewService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MdReviewService = TestBed.get(MdReviewService);
    expect(service).toBeTruthy();
  });
});
