import { TestBed } from '@angular/core/testing';

import { AuthdeactivateguardService } from './authdeactivateguard.service';

describe('AuthdeactivateguardService', () => {
  let service: AuthdeactivateguardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthdeactivateguardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
