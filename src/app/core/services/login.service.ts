import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as sha256 from 'sha.js';
import { UsuarioMineradora } from 'src/app/classes/usuarioMineradora';
import { environment } from 'src/environments/environment';

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
