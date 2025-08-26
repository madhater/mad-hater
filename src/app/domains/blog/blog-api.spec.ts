import { TestBed } from '@angular/core/testing';

import { BlogApi } from './blog-api';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';

describe('BlogApi', () => {
  let service: BlogApi;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideZonelessChangeDetection(), provideHttpClient(), provideHttpClientTesting()]
    });
    service = TestBed.inject(BlogApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
