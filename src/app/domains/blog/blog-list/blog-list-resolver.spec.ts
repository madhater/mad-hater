import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { blogListResolver } from './blog-list-resolver';
import { IBlog } from '../blog-interface';

describe('blogListResolver', () => {
  const executeResolver: ResolveFn<IBlog[]> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => blogListResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
