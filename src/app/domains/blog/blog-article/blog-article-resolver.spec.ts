import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { blogArticleResolver } from './blog-article-resolver';

describe('blogArticleResolverResolver', () => {
  const executeResolver: ResolveFn<string> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => blogArticleResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
