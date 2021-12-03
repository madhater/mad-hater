import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

import { BlogService } from './blog.service';

@Injectable()
export class BlogArticleResolver implements Resolve<string> {
  constructor(private blogService: BlogService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.blogService.getBlog(route.params.blogFileName);
  }
}