import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { AddressComponent } from 'cakebakery/my-cake/my-cake/src/app/address/address.component';
import { Observable } from 'rxjs';

export interface deactivate {
  canDeactivate():boolean
}


@Injectable({
  providedIn: 'root'
})
export class AuthdeactivateguardService implements CanDeactivate<deactivate> {

  constructor() { }
  canDeactivate(component:deactivate): boolean{
    return component.canDeactivate()

  }

}
