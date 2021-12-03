import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Blog } from './blog.model';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  blogList: Blog[] = [];
  blogArticle: Blog | null = null;
  monthAbbreviations: String[] = [
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

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.blogList = data.blogList || [];
      this.blogArticle = data.blogArticle || null;
    });
  }

}
