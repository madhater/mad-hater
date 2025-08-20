import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { BlogApi } from '../blog-api';
import { IBlog } from '../blog-interface';

export const blogListResolver: ResolveFn<IBlog[]> = () => {
  const blogApi = inject(BlogApi);
  return blogApi.getBlogList();
};
