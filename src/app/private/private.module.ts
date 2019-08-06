import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FeatherModule } from 'angular-feather';
import { Edit, Activity, Clipboard, Clock, FileText, ShoppingCart, Calendar } from 'angular-feather/icons';
import { InsumoComponent } from './crud/insumo/insumo.component';
import { HomeComponent } from './home/home.component';
import { PrivateRoutingModule } from './private.routing';
import { CanDeactivatePrivateGuardService } from './services/can-deactivate-private-guard.service';
import { TodoComponent } from './todo/todo.component';
import { MenuComponent } from './home/menu/menu.component';
import { PesquisaInsumoComponent } from './crud/insumo/pesquisa-insumo/pesquisa-insumo.component';
import { FormsModule } from '@angular/forms';
import { InsumoService } from './services/insumo.service';
import { PaginationModule } from 'ngx-bootstrap/pagination';


const icons = {
  Edit, Activity, Clipboard, Clock, FileText, ShoppingCart, Calendar
};


@NgModule({
  declarations: [
    HomeComponent,
    InsumoComponent,
    TodoComponent,
    MenuComponent,
    PesquisaInsumoComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    PrivateRoutingModule,
    FeatherModule.pick(icons),
    PaginationModule.forRoot()
  ], providers: [
    CanDeactivatePrivateGuardService,
    InsumoService
  ]
})
export class PrivateModule { }
