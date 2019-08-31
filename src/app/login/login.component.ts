import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { LoginService } from '../core/services/login.service';
import { AuthMineradoraService } from '../core/services/auth-mineradora/auth-mineradora.service';
import { NgForm } from '@angular/forms';
import { UsuarioMineradora } from '../classes/usuarioMineradora';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  @ViewChild('loginForm')
  form: NgForm;


  usuario: UsuarioMineradora = new UsuarioMineradora();

  constructor(private router: Router, public loginService: LoginService,
              private authMineradora: AuthMineradoraService,
              private toastr: ToastrService,
              private elRef: ElementRef) {
  }

  ngOnInit() {
    this.elRef.nativeElement.ownerDocument.body.style.backgroundColor = '#556B2F';
  }

  login() {

    if (this.form.valid) {
      this.loginService.login(this.usuario).subscribe((u: UsuarioMineradora) => {
        this.authMineradora.setUser(u);
        this.router.navigate(['/private']);
      }, (error) => {
          this.toastr.error('Usuário ou senha incorretos');
      });
    }

  }

}
