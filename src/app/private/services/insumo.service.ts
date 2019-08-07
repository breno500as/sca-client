import { Injectable } from '@angular/core';
import { Insumo } from 'src/app/classes/insumo';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.test';

@Injectable({
  providedIn: 'root'
})
export class InsumoService {

  constructor(private httpClient: HttpClient) { }

  pesquisar(insumo: Insumo, page: number, size: number): Observable<Array<Insumo>> {
    return this.httpClient.get<any>(`${environment.apiUrl}crud/insumos?page=${page}&size=${size}`);
  }
}
