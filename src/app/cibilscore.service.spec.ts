import { TestBed, inject } from '@angular/core/testing';

import { CibilscoreService } from './cibilscore.service';

describe('CibilscoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CibilscoreService]
    });
  });

  it('should be created', inject([CibilscoreService], (service: CibilscoreService) => {
    expect(service).toBeTruthy();
  }));
});
