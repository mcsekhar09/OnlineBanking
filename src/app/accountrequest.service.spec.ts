import { TestBed } from '@angular/core/testing';

import { AccountrequestService } from './accountrequest.service';

describe('AccountrequestService', () => {
  let service: AccountrequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccountrequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
