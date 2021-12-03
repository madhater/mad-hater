import { Inject, Injectable, Optional } from '@angular/core';
import { Router, Event, ActivatedRouteSnapshot, ActivationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Response } from 'express';
import { RESPONSE } from '@nguniversal/express-engine/tokens';
import { Subject } from 'rxjs';
import { Metadata } from './metadata.interface';
import { RouteData } from './route-data.interface';
import { HttpStatusCode } from '@angular/common/http';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class RouteAddonsService {
  private metaSubject: Subject<Metadata>;
  private headingSubject: Subject<string>;

  constructor(
    titleService: Title,    
    @Optional() @Inject(RESPONSE) response: Response,
    router: Router, 
  ) {
    this.metaSubject = new Subject();
    this.headingSubject = new Subject();

    router.events.pipe(
      filter((event: Event) => event instanceof ActivationEnd)
    ).subscribe((event: Event) => {
      const activationEndEvent: ActivationEnd = event as ActivationEnd;
      const { heading, metadata, httpStatus } = 
        this._retrieveLowestRouteData(
          activationEndEvent.snapshot, 
          {heading: '', metadata: { title: '', description: '' }, httpStatus: 200 }
        );
      
      titleService.setTitle(metadata.title);
      this.metaSubject.next(metadata);
      this.headingSubject.next(heading);
     
      if(response && httpStatus !== HttpStatusCode.Ok) {
        response.status(httpStatus);
      }
    });
  }

  public getMetadata() {
    return this.metaSubject.asObservable();
  }

  public getHeading() {
    return this.headingSubject.asObservable();
  }

  private _retrieveLowestRouteData(route: ActivatedRouteSnapshot, data: RouteData): RouteData {
    data.httpStatus = route.data?.httpStatus ? route.data.httpStatus : data.httpStatus;
    data.heading = route.data?.heading ? route.data.heading : data.heading;
    data.metadata = route.data?.metadata ? route.data.metadata : data.metadata;
    if(route?.firstChild) {
      return this._retrieveLowestRouteData(route.firstChild, data)
    }
    return data;
  }

}
