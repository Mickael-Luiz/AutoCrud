import { TestBed } from '@angular/core/testing';

import { FinancialReleaseService } from './financial-release.service';

describe('FinancialReleaseService', () => {
  let service: FinancialReleaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FinancialReleaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
