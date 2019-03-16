import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { filter, map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  private APP_TITLE = 'MADHATER';
  pageTitle = 'Home';
  isNavigationExpanded: boolean = false;
  showMinificationButton: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private titleService: Title
  ) { }

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map(route => route.firstChild),
      switchMap(route => route.data)
    )
    .subscribe(data => {
      this.pageTitle = data && data.title ? data.title : 'Home';
      this.isNavigationExpanded = data.isNavigationExpanded;
      this.titleService.setTitle(`${this.APP_TITLE} ${this.pageTitle.toUpperCase()}`);
      // scroll window to top of page (like normal page loads)
      if(window && window.scrollTo) window.scrollTo(0,0);
    })
  }
}
