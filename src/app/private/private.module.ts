import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CanDeactivatePrivateGuardService } from './services/can-deactivate-mineradora-guard.service';
import { PrivateRoutingModule } from './private.routing.module';
import { InsumoComponent } from './crud/insumo/insumo.component';

@NgModule({
  declarations: [
    HomeComponent,
    InsumoComponent,
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule
  ], providers: [
    CanDeactivatePrivateGuardService
  ]
})
export class PrivateModule { }
