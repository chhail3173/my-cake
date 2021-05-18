import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { stat } from 'node:fs';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):  boolean{
    if(state.url === "/login") {
      if(localStorage.token){
        this.router.navigate(['/']);
        return false   
      }else{
        // return true
      }
    }
    return true;
  }
}
