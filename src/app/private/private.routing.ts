import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthMineradoraGuardService } from '../core/services/auth-mineradora/auth-mineradora-guard.service';
import { InsumoComponent } from './crud/insumo/insumo.component';
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
        path: 'insumo', component: InsumoComponent
      },
      {
        path: 'marca-modelo', component: TodoComponent
      },
      {
        path: 'tipo-insumo', component: TodoComponent
      },
      {
        path: 'subtipo-insumo', component: TodoComponent
      },
      {
        path: 'agenda-manutencao', component: TodoComponent
      },
      {
        path: 'aquisicao-insumo', component: TodoComponent
      },
      {
        path: 'estudo', component: TodoComponent
      },
      {
        path: 'atv-perfuracao', component: TodoComponent
      },
      {
        path: 'atv-transporte', component: TodoComponent
      },
      {
        path: 'atv-preparacao', component: TodoComponent
      },
      {
        path: 'alerta-barragem', component: TodoComponent
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
