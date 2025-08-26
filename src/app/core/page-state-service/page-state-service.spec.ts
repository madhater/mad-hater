import { TestBed } from '@angular/core/testing';

import { PageStateService } from './page-state-service';
import { provideZonelessChangeDetection } from '@angular/core';

describe('PageStateService', () => {
  let service: PageStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ provideZonelessChangeDetection() ]
    });
    service = TestBed.inject(PageStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
