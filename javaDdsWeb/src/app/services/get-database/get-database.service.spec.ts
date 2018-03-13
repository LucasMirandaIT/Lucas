import { TestBed, inject } from '@angular/core/testing';

import { GetDatabaseService } from './get-database.service';

describe('GetBigdataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetDatabaseService]
    });
  });

  it('should be created', inject([GetDatabaseService], (service: GetDatabaseService) => {
    expect(service).toBeTruthy();
  }));
});
