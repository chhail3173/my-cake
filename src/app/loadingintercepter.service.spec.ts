import { TestBed } from '@angular/core/testing';

import { LoadingintercepterService } from './loadingintercepter.service';

describe('LoadingintercepterService', () => {
  let service: LoadingintercepterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadingintercepterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
