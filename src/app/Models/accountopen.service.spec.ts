import { TestBed } from '@angular/core/testing';

import { AccountopenService } from './accountopen.service';

describe('AccountopenService', () => {
  let service: AccountopenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccountopenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
