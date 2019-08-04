import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthMineradoraGuardService } from './core/services/auth-mineradora/auth-mineradora-guard.service';

const routes: Routes = [
  { path: 'private', loadChildren: './private/private.module#PrivateModule', canLoad: [AuthMineradoraGuardService] },
  { path: '',   redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
