import { TestBed, inject } from '@angular/core/testing';

import { CicloService } from './ciclo.service';

describe('CicloService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CicloService]
    });
  });

  it('should be created', inject([CicloService], (service: CicloService) => {
    expect(service).toBeTruthy();
  }));
});
