import { TestBed } from '@angular/core/testing';

import { BenifiaciaryaryService } from './benifiaciaryary.service';

describe('BenifiaciaryaryService', () => {
  let service: BenifiaciaryaryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BenifiaciaryaryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
