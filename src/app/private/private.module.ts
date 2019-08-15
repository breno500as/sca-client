import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FeatherModule } from 'angular-feather';
import { Edit, Activity, Clipboard, Clock, FileText, ShoppingCart, Calendar, Save, Trash, Check } from 'angular-feather/icons';
import { InsumoComponent } from './crud/insumo/insumo.component';
import { HomeComponent } from './home/home.component';
import { PrivateRoutingModule } from './private.routing';
import { CanDeactivatePrivateGuardService } from './services/can-deactivate-private-guard.service';
import { TodoComponent } from './todo/todo.component';
import { MenuComponent } from './home/menu/menu.component';
import { PesquisaInsumoComponent } from './crud/insumo/pesquisa-insumo/pesquisa-insumo.component';
import { FormsModule } from '@angular/forms';
import { InsumoService } from './services/insumo.service';
import { TooltipModule, PopoverModule } from 'ngx-bootstrap';
import { PaginationModule } from 'ngx-bootstrap';
import { AlertaBarragemComponent } from './monitor/alerta-barragem/alerta-barragem.component';
import { AtividadePerfuracaoComponent } from './bpm/atividade-perfuracao/atividade-perfuracao.component';
// tslint:disable-next-line:max-line-length
import { PesquisaAtividadePerfuracaoComponent } from './bpm/atividade-perfuracao/pesquisa-atividade-perfuracao/pesquisa-atividade-perfuracao.component';
import { AtividadePerfuracaoService } from './services/atividade-perfuracao.service';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ModalRegistroProblemaComponent } from './bpm/atividade-perfuracao/modal-registro-problema/modal-registro-problema.component';

const icons = {
  Edit, Activity, Clipboard, Clock, FileText, ShoppingCart, Calendar, Save, Trash, Check
};


@NgModule({
  declarations: [
    HomeComponent,
    InsumoComponent,
    TodoComponent,
    MenuComponent,
    PesquisaInsumoComponent,
    AlertaBarragemComponent,
    AtividadePerfuracaoComponent,
    ModalRegistroProblemaComponent,
    PesquisaAtividadePerfuracaoComponent
  ],
  entryComponents: [
    ModalRegistroProblemaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PrivateRoutingModule,
    TooltipModule.forRoot(),
    FeatherModule.pick(icons),
    PaginationModule.forRoot(),
    PopoverModule.forRoot(),
    BsDatepickerModule.forRoot(),
    ModalModule.forRoot()
  ], providers: [
    CanDeactivatePrivateGuardService,
    InsumoService,
    AtividadePerfuracaoService
  ]
})
export class PrivateModule { }
