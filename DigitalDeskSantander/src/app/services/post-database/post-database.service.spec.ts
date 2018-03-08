import { TestBed, inject } from '@angular/core/testing';

import { PostDatabaseService } from './post-database.service';

describe('PostDatabaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostDatabaseService]
    });
  });

  it('should be created', inject([PostDatabaseService], (service: PostDatabaseService) => {
    expect(service).toBeTruthy();
  }));
});
