import { TestBed, inject } from '@angular/core/testing';

import { ImpostoService } from './imposto.service';

describe('ImpostoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImpostoService]
    });
  });

  it('should be created', inject([ImpostoService], (service: ImpostoService) => {
    expect(service).toBeTruthy();
  }));
});
