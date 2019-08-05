import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginService } from '../core/services/login.service';
import { AuthMineradoraService } from '../core/services/auth-mineradora/auth-mineradora.service';
import { NgForm } from '@angular/forms';
import { UsuarioMineradora } from '../classes/usuarioMineradora';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  @ViewChild('loginForm')
  form: NgForm;


  usuario: UsuarioMineradora = new UsuarioMineradora();

  constructor(private router: Router, public loginService: LoginService, public authMineradora: AuthMineradoraService) {
  }

  ngOnInit() {
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
