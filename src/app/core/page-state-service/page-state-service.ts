import { inject, Injectable, signal } from '@angular/core';
import { IMetadata } from './metadata-interface';
import { Title } from '@angular/platform-browser';
import { ActivatedRouteSnapshot, ActivationEnd, Event, Router } from '@angular/router';
import { filter } from 'rxjs';
import { IRouteData } from './route-data-interface';

@Injectable({
  providedIn: 'root'
})
export class PageStateService {
  private title = inject(Title);
  private router = inject(Router);
  public metadata$$ = signal<IMetadata>({ title: '', description: '' });
  public heading$$ = signal<string>('');
  public isNavigationExpanded$$ = signal<boolean>(false);

  constructor() {    
    this.router.events.pipe(
      filter((event: Event) => event instanceof ActivationEnd)
    ).subscribe((event: Event) => {
      const activationEndEvent: ActivationEnd = event as ActivationEnd;
      const { heading, metadata, isNavigationExpanded } = 
        this._retrieveLowestRouteData(
          activationEndEvent.snapshot, 
          { heading: '', metadata: { title: '', description: '' }, isNavigationExpanded: false }
        );
      
      this.title.setTitle(metadata.title);
      this.metadata$$.set(metadata);
      this.heading$$.set(heading);
      this.isNavigationExpanded$$.set(isNavigationExpanded)
    });
  }

  private _retrieveLowestRouteData(route: ActivatedRouteSnapshot, data: IRouteData): IRouteData {
    data.heading = route.data['heading'] ?? data.heading;
    data.metadata = route.data['metadata'] ?? data.metadata;
    if(route?.firstChild) {
      return this._retrieveLowestRouteData(route.firstChild, data)
    }
    return data;
  }
}
