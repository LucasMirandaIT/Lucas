import { TestBed, inject } from '@angular/core/testing';

import { SegundoService } from './segundo.service';

describe('SegundoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SegundoService]
    });
  });

  it('should be created', inject([SegundoService], (service: SegundoService) => {
    expect(service).toBeTruthy();
  }));
});
