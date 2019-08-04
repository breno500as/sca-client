import { Injectable } from '@angular/core';
import { CanLoad, Route, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthMineradoraService } from './auth-mineradora.service';

@Injectable()
export class AuthMineradoraGuardService implements CanLoad, CanActivate {

  constructor(private authMineradoraService: AuthMineradoraService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.checkLogin();
  }

  canLoad(route: Route): boolean {
    this.mockLogin();
    return this.checkLogin();
  }

  mockLogin() {
    this.authMineradoraService.setUser({id: 1 , nome: 'teste', permissoes: []});
  }

  checkLogin(): boolean {
    if (this.authMineradoraService.hasUser()) {
       return true;
    }
    return false;
  }
}
