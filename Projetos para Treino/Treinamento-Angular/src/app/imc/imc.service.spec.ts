import { TestBed, inject } from '@angular/core/testing';

import { ImcService } from './imc.service';

describe('ImcService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImcService]
    });
  });

  it('should be created', inject([ImcService], (service: ImcService) => {
    expect(service).toBeTruthy();
  }));
});
