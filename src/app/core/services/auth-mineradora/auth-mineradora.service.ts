import { Injectable } from '@angular/core';
import { SessionStorageService } from 'ngx-webstorage';
import { UsuarioMineradora } from '../../../interfaces/usuarioMineradora';


@Injectable()
export class AuthMineradoraService {

  private currentUser: UsuarioMineradora;

  constructor(private sessionStorage: SessionStorageService) { }

  getUser(): UsuarioMineradora {
    return this.sessionStorage.retrieve('user');
  }

  setUser(usuarioMineradora: UsuarioMineradora) {
     this.sessionStorage.store('user', usuarioMineradora);
  }

  hasUser(): boolean {
    return this.sessionStorage.retrieve('user') != null;
  }

}
