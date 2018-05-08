import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs/Observable";



@Injectable()
export class AuthInterceptorService implements HttpInterceptor{

  constructor() { }

  intercept(req: HttpRequest<any>,
            next: HttpHandler): Observable<HttpEvent<any>>{
    const idToken = sessionStorage.getItem('token');

    if(idToken){
      const cloned = req.clone({
          headers: req.headers.set('Authorization',
              'Bearer' + idToken)
      });

      return next.handle(cloned);
    }
    else{
      return next.handle(req);
    }
  }

}
