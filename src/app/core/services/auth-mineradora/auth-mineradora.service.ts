import { Injectable } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { UsuarioMineradora } from '../../../classes/usuarioMineradora';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthMineradoraService {

  constructor(private localStorage: LocalStorageService, private httpClient: HttpClient) { }

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

  recuperaUsuarios(): Observable<Array<UsuarioMineradora>> {
    return this.httpClient.get<Array<UsuarioMineradora>>(`${environment.apiUrl}usuarios`);
  }

  recuperaUsuarioPorId(id: number): Observable<UsuarioMineradora> {
    return this.httpClient.get<UsuarioMineradora>(`${environment.apiUrl}usuarios/${id}`);
  }

}
