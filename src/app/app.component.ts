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
  private _isNavigationExpanded = false;
  get isNavigationExpanded(): boolean {
    return this._isNavigationExpanded;
  }
  set isNavigationExpanded(isExpanded: boolean) {
    this._isNavigationExpanded = isExpanded;
    if(this._isNavigationExpanded && document) {
      try {
        document.body.classList.add('overflow-hidden');
      } catch(e) {
        if(console && console.error) console.error(e);
      }
    } else if(!this._isNavigationExpanded && document) {
      try {
        document.body.classList.remove('overflow-hidden');
      } catch(e) {
        if(console && console.error) console.error(e);
      }
    }
  }

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
      this.pageTitle = this.APP_TITLE;
      if(data && data.title) this.pageTitle = `${this.APP_TITLE} / ${data.title}`;
      this.titleService.setTitle(this.pageTitle.toUpperCase());
      this.isNavigationExpanded = data && data.isNavigationExpanded;
      // scroll window to top of page (like normal page loads)
      if(window && window.scrollTo) window.scrollTo(0,0);
    })
  }
}
