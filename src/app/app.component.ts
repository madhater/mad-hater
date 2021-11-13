import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { filter, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  private APP_TITLE = 'MADHATER';
  pageTitle = 'Home';
  isNavigationExpanded = false;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,    
    @Inject(DOCUMENT) private document: any, 
    private renderer: Renderer2
  ) { }

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map(route => route.firstChild),
      switchMap(routeRoot => routeRoot?.data || of(null)),
      filter(data => !!data)
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
    })
  }
}
