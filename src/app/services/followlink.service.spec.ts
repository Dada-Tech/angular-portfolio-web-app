import { TestBed } from '@angular/core/testing';

import { FollowlinkService } from './followlink.service';

describe('FollowlinkService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FollowlinkService = TestBed.get(FollowlinkService);
    expect(service).toBeTruthy();
  });
});
