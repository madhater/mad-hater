import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
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
  isNavigationExpanded = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private titleService: Title,    
    @Inject(DOCUMENT) private document, 
    private renderer: Renderer2
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
      if(this.isNavigationExpanded) {
        this.renderer.addClass(this.document.body, 'overflow-hidden');
      } else if(!this.isNavigationExpanded) {
        this.renderer.removeClass(this.document.body, 'overflow-hidden');
      }
      // scroll window to top of page (like normal page loads)
      if(typeof window !== 'undefined' && window.scrollTo) window.scrollTo(0,0);
    })
  }
}
