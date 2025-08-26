import { ChangeDetectionStrategy, Component, inject, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { IBlog } from '../blog-interface';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'mh-blog-article',
  imports: [AsyncPipe],
  templateUrl: './blog-article.html',
  styleUrl: './blog-article.scss',
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogArticle {
  private activatedRoute = inject(ActivatedRoute);
  public blogArticle$: Observable<string>;

  constructor() {
    this.blogArticle$ = this.activatedRoute.data.pipe(map((data) => data['blogArticle'] ?? null));
  }
}
