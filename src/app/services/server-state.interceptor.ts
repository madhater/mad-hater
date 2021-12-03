import { HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable, Inject, Optional } from '@angular/core';
import { makeStateKey, TransferState } from '@angular/platform-browser';
import { REQUEST } from '@nguniversal/express-engine/tokens';
import { Request } from 'express';
import { tap } from 'rxjs/operators';

@Injectable()
export class ServerStateInterceptor implements HttpInterceptor {

  constructor(
    private transferState: TransferState,
    @Optional() @Inject(REQUEST) protected request: Request
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let serverReq: HttpRequest<any> = req;
    if (this.request) {
      const fullUrl = `${this.request.protocol}://${this.request.get('host')}` + 
        (req.url.startsWith('/') ? req.url : `/${req.url}`);
      serverReq = req.clone({ url: fullUrl });
    }
    return next.handle(serverReq).pipe(
      tap(event => {
        if (event instanceof HttpResponse) {
          if(event.status === 200 || event.status === 202) {
            this.transferState.set(makeStateKey(req.url), event.body);
          }
        }
      }),
    );
  }
}