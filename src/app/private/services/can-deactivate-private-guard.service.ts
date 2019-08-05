import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthMineradoraService } from 'src/app/core/services/auth-mineradora/auth-mineradora.service';


export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
 }

@Injectable()
export class CanDeactivatePrivateGuardService implements CanDeactivate<CanComponentDeactivate> {

  constructor(private authService: AuthMineradoraService) {

  }

  canDeactivate(
    component: CanComponentDeactivate,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot
  ): Observable<boolean>|Promise<boolean>|boolean {

    if (this.authService.hasUser() && nextState.url.includes('/')) {
      return false;
    }
    return true;
  }
}
