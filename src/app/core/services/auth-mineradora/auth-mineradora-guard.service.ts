import { Injectable } from '@angular/core';
import { CanLoad, Route, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthMineradoraService } from './auth-mineradora.service';

@Injectable()
export class AuthMineradoraGuardService implements CanLoad, CanActivate {

  constructor(private authMineradoraService: AuthMineradoraService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.checkLogin();
  }

  canLoad(route: Route): boolean {
    return this.checkLogin();
  }


  checkLogin(): boolean {

    if (this.authMineradoraService.hasUser()) {
       return true;
    }

    this.router.navigate(['/']);
    return false;
  }
}
