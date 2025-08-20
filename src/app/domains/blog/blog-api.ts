import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map } from 'rxjs';
import { IBlog } from './blog-interface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BlogApi {
  private http = inject(HttpClient);
  private router = inject(Router);
  private blogBasePath = "/blog-articles/v2/";
  private blogListURL = this.blogBasePath + "blog-articles.json";
  
  getBlogList() {
    return this.http.get<IBlog[]>(this.blogListURL)
      .pipe(
        catchError(error => {
          console.error(error);
          this.router.navigate(['not-found']);
          return [];
        }),
        map(blogList => {
          for(let blog of blogList) {
            blog.date = new Date(blog.date);
          }
          return blogList;
        }));
  }

  getBlog(fileName: string) {
    return this.http.get(this.blogBasePath + fileName, { responseType: 'text' })
      .pipe(
        catchError(error => {
          console.error(error);
          this.router.navigate(['not-found']);
          return '';
        }));
  }
}
