import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthMineradoraGuardService } from '../core/services/auth-mineradora/auth-mineradora-guard.service';
import { AtividadePerfuracaoComponent } from './bpm/atividade-perfuracao/atividade-perfuracao.component';
import { PesquisaAtividadePerfuracaoComponent } from './bpm/atividade-perfuracao/pesquisa-atividade-perfuracao/pesquisa-atividade-perfuracao.component';
import { InsumoComponent } from './crud/insumo/insumo.component';
import { PesquisaInsumoComponent } from './crud/insumo/pesquisa-insumo/pesquisa-insumo.component';
import { HomeComponent } from './home/home.component';
import { AlertaBarragemComponent } from './monitor/alerta-barragem/alerta-barragem.component';
import { CanDeactivatePrivateGuardService } from './services/can-deactivate-private-guard.service';
import { TodoComponent } from './todo/todo.component';

const privateRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthMineradoraGuardService],
    canDeactivate: [CanDeactivatePrivateGuardService],
    children: [
      {
        path: 'insumo',
        children: [
          {
            path: '', component: PesquisaInsumoComponent
          },
          {
            path: ':id', component: InsumoComponent
          },
          {
            path: 'cadastro', component: InsumoComponent
          }
        ]
      },
      {
        path: 'agenda-manutencao', component: TodoComponent
      },
      {
        path: 'aquisicao-insumo', component: TodoComponent
      },
      {
        path: 'bpm-perfuracao',
        children: [
          {
            path: '', component: PesquisaAtividadePerfuracaoComponent
          },
          {
            path: ':id', component: AtividadePerfuracaoComponent
          },
          {
            path: 'cadastro', component: AtividadePerfuracaoComponent
          }
        ]
      },
      {
        path: 'bpm-transporte', component: TodoComponent
      },
      {
        path: 'bpm-preparacao', component: TodoComponent
      },
      {
        path: 'bpm-preservacao-ambiente', component: TodoComponent
      },
      {
        path: 'bpm-estudo', component: TodoComponent
      },
      {
        path: 'alerta-barragem', component: AlertaBarragemComponent
      },
      {
        path: 'dados-monitoramento', component: TodoComponent
      },
      {
        path: 'rel-atv-operador', component: TodoComponent
      },
      {
        path: 'rel-atv-alerta', component: TodoComponent
      },
      {
        path: 'rel-insumo-manutencao', component: TodoComponent
      },
      {
        path: 'rel-insumo-aquisicao', component: TodoComponent
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(privateRoutes)],
  exports: [RouterModule],
})
export class PrivateRoutingModule { }
