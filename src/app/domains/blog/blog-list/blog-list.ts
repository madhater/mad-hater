import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map, Observable } from 'rxjs';
import { IBlog } from '../blog-interface';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'mh-blog',
  imports: [RouterLink, AsyncPipe],
  templateUrl: './blog-list.html',
  styleUrl: './blog-list.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogList {
  private activatedRoute = inject(ActivatedRoute);
  public blogList: IBlog[] = [];
  public blogArticle: IBlog | null = null;
  public monthAbbreviations: String[] = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];

  public blogList$: Observable<IBlog[]> | undefined;

  constructor() {
    this.blogList$ = this.activatedRoute.data.pipe(map((data) => data['blogList'] ?? []));
  }
}
