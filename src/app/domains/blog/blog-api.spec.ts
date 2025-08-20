import { TestBed } from '@angular/core/testing';

import { BlogApi } from './blog-api';

describe('BlogApi', () => {
  let service: BlogApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlogApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
