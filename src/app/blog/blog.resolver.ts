import { Injectable } from '@angular/core';
import { BlogService } from './blog.service';

import { Resolve } from '@angular/router';

@Injectable()
export class BlogResolver implements Resolve<any> {
  constructor(private blogService: BlogService) {}

  resolve() {
    return this.blogService.getBlogList();
  }
}