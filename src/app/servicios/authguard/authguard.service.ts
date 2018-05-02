import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs/Observable";

@Injectable()
export class AuthguardService implements CanActivate{

  constructor( private router: Router) { }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if(sessionStorage.getItem('token')){
          //console.log(sessionStorage.getItem('token'));
          return true;
      }
      this.router.navigate(['/login']);
      return false;
  }
}
