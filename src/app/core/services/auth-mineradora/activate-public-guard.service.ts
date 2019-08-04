import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthMineradoraService } from './auth-mineradora.service';

@Injectable()
export class ActivatePublicGuardService implements CanActivate {

  constructor(private authMineradoraService: AuthMineradoraService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.checkLogin();
  }


  checkLogin(): boolean {

    if (this.authMineradoraService.hasUser()) {
        this.router.navigate(['/private']);
        return false;
    }

    this.router.navigate(['/']);
    return true;
  }
}
