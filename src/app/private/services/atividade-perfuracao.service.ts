import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AtividadePerfuracao } from 'src/app/classes/atividadePerfuracao';
import { Insumo } from 'src/app/classes/insumo';
import { SubTipoInsumo } from 'src/app/classes/subTipoInsumo';
import { TipoInsumo } from 'src/app/classes/tipoInsumo';
import { environment } from 'src/environments/environment.test';
import { Task } from 'src/app/classes/task';

@Injectable({
  providedIn: 'root'
})
export class AtividadePerfuracaoService {

  constructor(private httpClient: HttpClient) { }

  pesquisa(filtro: AtividadePerfuracao, page: number, maxSize: number): Observable<Array<AtividadePerfuracao>> {

    let params =  `page=${page}&size=${maxSize}`;

    if (filtro.usuarioMineradora) {
       params += `&usuarioMineradoraId=${filtro.usuarioMineradora}`;
    }

    return this.httpClient.get<Array<AtividadePerfuracao>>(`${environment.apiUrl}bpm/atividades-perfuracao?${params}`);
  }

  findById(id: number): Observable<AtividadePerfuracao> {
    return this.httpClient.get<AtividadePerfuracao>(`${environment.apiUrl}bpm/atividades-perfuracao/${id}`);
  }

  incluiAtividade(atividadePerfuracao: AtividadePerfuracao): Observable<AtividadePerfuracao> {
    return this.httpClient.post<AtividadePerfuracao>(`${environment.apiUrl}bpm/atividades-perfuracao`, atividadePerfuracao);
  }

  concluiAtividade(task: Task): Observable<any> {
    return this.httpClient.put(`${environment.apiUrl}bpm/atividades-perfuracao/${task.id}`, task);
  }

  recuperaTarefasPorOperador(usuarioMineradoraId: number): Observable<Array<Task>> {
    return this.httpClient.get<Array<Task>>(`${environment.apiUrl}bpm/atividades-perfuracao/tarefas-por-operador/${usuarioMineradoraId}`);
  }
}
