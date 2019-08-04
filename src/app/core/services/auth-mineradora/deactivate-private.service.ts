import { Injectable } from '@angular/core';
import { CanDeactivate, Router } from '@angular/router';
import { AuthMineradoraService } from './auth-mineradora.service';



@Injectable()
export class DeactivatePrivateGuardService  {

  constructor(private authMineradoraService: AuthMineradoraService, private router: Router) { }

}
