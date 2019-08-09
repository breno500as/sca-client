import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Alerta } from 'src/app/classes/alerta';
import { environment } from 'src/environments/environment.test';

@Injectable({
  providedIn: 'root'
})
export class AlertaService {

  constructor(private httpClient: HttpClient) { }

  enviaAlerta(alerta: Alerta): Observable<any> {
    return this.httpClient.post(`${environment.apiUrl}monitor/comunicacoes-seguranca`, alerta);
  }
}
