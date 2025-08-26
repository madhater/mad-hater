import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { BlogApi } from '../blog-api';

export const blogArticleResolver: ResolveFn<string> = (route) => {
  const blogApi = inject(BlogApi);
  return blogApi.getBlog(route.params['blogFileName']);
};
