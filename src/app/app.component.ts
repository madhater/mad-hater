import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { filter, map, switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { RouteAddonsService } from './services/route-addons.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  heading$: Observable<string> = this.routeAddonsService.getHeading();
  isNavigationExpanded = false;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    @Inject(DOCUMENT) private document: any, 
    private renderer: Renderer2,
    private routeAddonsService: RouteAddonsService,
  ) { }

  ngOnInit() {
    this.routeAddonsService.getMetadata().subscribe(metaData => {
      console.log('metaData', metaData);
    });

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map(route => route.firstChild),
      switchMap(routeRoot => routeRoot?.data || of(null)),
      filter(data => !!data)
    )
    .subscribe(data => {
      this.isNavigationExpanded = data && data.isNavigationExpanded;
      if(this.isNavigationExpanded) {
        this.renderer.addClass(this.document.body, 'overflow-hidden');
      } else if(!this.isNavigationExpanded) {
        this.renderer.removeClass(this.document.body, 'overflow-hidden');
      }
    })
  }
}
