import { TestBed, inject } from '@angular/core/testing';

import { DomainsService } from './domains.service';

describe('DomainsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DomainsService]
    });
  });

  it('should ...', inject([DomainsService], (service: DomainsService) => {
    expect(service).toBeTruthy();
  }));
});
