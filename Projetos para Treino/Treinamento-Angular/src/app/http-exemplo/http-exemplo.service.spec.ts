import { TestBed, inject } from '@angular/core/testing';

import { HttpExemploService } from './http-exemplo.service';

describe('HttpExemploService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpExemploService]
    });
  });

  it('should be created', inject([HttpExemploService], (service: HttpExemploService) => {
    expect(service).toBeTruthy();
  }));
});
