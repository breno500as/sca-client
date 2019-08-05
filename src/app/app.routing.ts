import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthMineradoraGuardService } from './core/services/auth-mineradora/auth-mineradora-guard.service';
import { CanActivatePublicGuardService } from './core/services/auth-mineradora/can-activate-public-guard.service';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: 'private', loadChildren: './private/private.module#PrivateModule', canLoad: [AuthMineradoraGuardService] },
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  { path: 'login',  component: LoginComponent ,  canActivate: [CanActivatePublicGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
