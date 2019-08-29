import { Injectable } from '@angular/core';
import { Insumo } from 'src/app/classes/insumo';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { TipoInsumo } from 'src/app/classes/tipoInsumo';
import { SubTipoInsumo } from 'src/app/classes/subTipoInsumo';
import { TipoMarcaModelo } from 'src/app/classes/tipoMarcaModelo';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InsumoService {

  constructor(private httpClient: HttpClient) { }

  pesquisa(filtro: Insumo, page: number, maxSize: number): Observable<Array<Insumo>> {

    let params =  `page=${page}&size=${maxSize}`;

    if (filtro.tipoInsumo) {
       params += `&tipoInsumo=${filtro.tipoInsumo}`;
    }

    return this.httpClient.get<Array<Insumo>>(`${environment.apiUrl}crud/insumos?${params}`);
  }

  findById(id: number): Observable<Insumo> {
    return this.httpClient.get<Insumo>(`${environment.apiUrl}crud/insumos/${id}`);
  }

  salva(insumo: Insumo): Observable<Insumo> {
    return this.httpClient.post<Insumo>(`${environment.apiUrl}crud/insumos`, insumo);
  }

  atualiza(insumo: Insumo): Observable<Insumo> {
    return this.httpClient.put<Insumo>(`${environment.apiUrl}crud/insumos/${insumo.id}`, insumo);
  }

  deleta(insumo: Insumo): Observable<any> {
    return this.httpClient.delete(`${environment.apiUrl}crud/insumos/${insumo.id}`);
  }

  recuperaTipoInsumo(): Observable<Array<TipoInsumo>> {
    return this.httpClient.get<Array<TipoInsumo>>(`${environment.apiUrl}crud/tipos-insumo`);
  }

  recuperaSubTipoInsumo(tipoInsumo: TipoInsumo): Observable<Array<SubTipoInsumo>> {
    return this.httpClient.get<Array<SubTipoInsumo>>(`${environment.apiUrl}crud/subtipos-insumo?tipoInsumo=${tipoInsumo.id}`);
  }

  recuperaTipoMarcaModelo(subTipoInsumo: SubTipoInsumo): Observable<Array<TipoMarcaModelo>> {
    return this.httpClient.get<Array<TipoMarcaModelo>>(`${environment.apiUrl}crud/tipos-marca-modelo?subTipoInsumo=${subTipoInsumo.id}`);
  }
}
