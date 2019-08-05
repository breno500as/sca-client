import { Injectable } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { UsuarioMineradora } from '../../../classes/usuarioMineradora';


@Injectable()
export class AuthMineradoraService {


  constructor(private localStorage: LocalStorageService) { }

  getUser(): UsuarioMineradora {
    return this.localStorage.retrieve('user');
  }

  setUser(usuarioMineradora: UsuarioMineradora) {
     this.localStorage.store('user', usuarioMineradora);
  }

  hasUser(): boolean {
    return this.localStorage.retrieve('user') != null;
  }

  logout() {
    this.localStorage.clear('user');
  }

}
