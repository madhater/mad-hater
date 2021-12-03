import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Blog } from './blog.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private blogBasePath = "/assets/blog-articles/v2/";
  private blogListURL = this.blogBasePath + "blog-articles.json";

  constructor(
    private http: HttpClient,
    private readonly router: Router
  ) { }

  getBlogList() {
    return this.http.get<Blog[]>(this.blogListURL)
      .pipe(
        catchError(error => {
          console.error(error);
          this.router.navigate(['not-found']);
          return []
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
