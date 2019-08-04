import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CanDeactivatePrivateGuardService } from './services/can-deactivate-mineradora-guard.service';
import { AuthMineradoraGuardService } from '../core/services/auth-mineradora/auth-mineradora-guard.service';
import { InsumoComponent } from './crud/insumo/insumo.component';

const privateRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthMineradoraGuardService],
    canDeactivate: [CanDeactivatePrivateGuardService],
    children: [
      {
        path: 'insumo', component: InsumoComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(privateRoutes)],
  exports: [RouterModule],
})
export class PrivateRoutingModule { }
