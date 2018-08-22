import { TestBed, inject } from '@angular/core/testing';

import { AddFriendsService } from './add-friends.service';

describe('AddFriendsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddFriendsService]
    });
  });

  it('should be created', inject([AddFriendsService], (service: AddFriendsService) => {
    expect(service).toBeTruthy();
  }));
});
