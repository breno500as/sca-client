import { Injectable } from '@angular/core';
import { UsuarioMineradora } from 'src/app/classes/usuarioMineradora';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {Md5} from 'md5-typescript';
import * as sha256 from 'sha.js';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  public login(usuarioMineradora: UsuarioMineradora): Observable<UsuarioMineradora> {
    const usuario = Object.assign({}, usuarioMineradora);
    const salt = usuarioMineradora.username;
    usuario.password = sha256('sha256').update(salt + usuarioMineradora.password).digest('hex');

    return this.httpClient.post<any>(`${environment.apiUrl}public/login`, usuario
    );

  }
}
