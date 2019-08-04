import { Component, ViewChild } from '@angular/core';
import { Spinkit } from 'ng-http-loader';
import { Router } from '@angular/router';
import { UsuarioMineradora } from './classes/usuarioMineradora';
import { LoginService } from './core/services/login.service';
import { AuthMineradoraService } from './core/services/auth-mineradora/auth-mineradora.service';
import { NgForOf } from '@angular/common';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sca-client';
  public spinkit = Spinkit;

  usuario: UsuarioMineradora = new UsuarioMineradora();

  @ViewChild('loginForm')
  form: NgForm;

  constructor(public router: Router, public loginService: LoginService, public authMineradora: AuthMineradoraService) {
  }

  login() {

    if (this.form.valid) {
      this.loginService.login(this.usuario).subscribe((u: UsuarioMineradora) => {
        this.authMineradora.setUser(u);
        this.router.navigate(['/private']);
      });
    }

  }

}
