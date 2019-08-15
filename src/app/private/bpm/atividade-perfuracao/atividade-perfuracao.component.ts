import { Component, OnInit, ViewChild } from '@angular/core';
import { AtividadePerfuracao } from 'src/app/classes/atividadePerfuracao';
import { UsuarioMineradora } from 'src/app/classes/usuarioMineradora';
import { AuthMineradoraService } from 'src/app/core/services/auth-mineradora/auth-mineradora.service';
import { AtividadePerfuracaoService } from '../../services/atividade-perfuracao.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { MSG_SALVO_SUCESSO } from 'src/app/core/helpers/util';
import { Task } from 'src/app/classes/task';
import { SimNaoEnum } from 'src/app/enum/simNaoEnum';
import { DecisaoRemocaoEnum } from 'src/app/enum/decisaoRemocaoEnum';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { ModalRegistroProblemaComponent } from './modal-registro-problema/modal-registro-problema.component';
import { BpmAtividadePerfuracaoEnum } from 'src/app/enum/bpmAtividadePerfuracao';


@Component({
  selector: 'app-private-atividade-perfuracao',
  templateUrl: './atividade-perfuracao.component.html',
  styleUrls: ['./atividade-perfuracao.component.css']
})
export class AtividadePerfuracaoComponent implements OnInit {

  @ViewChild('atividadePerfuracaoForm')
  atividadePerfuracaoForm: NgForm;

  atividadePerfuracao =  new AtividadePerfuracao();

  usuariosMineradora: Array<UsuarioMineradora>;

  rangeDatas: Array<Date>;

  decisoesRemocao: any[];

  decisoesProblema: any[];

  modelDecisaoRemocao: DecisaoRemocaoEnum;

  modelSimNaoProblema: SimNaoEnum;

  bsModalRef: BsModalRef;

  task: Task;

  simNaoEnum = SimNaoEnum;

  minDate = new Date();

  public bpmAtividadePerfuracaoEnum = BpmAtividadePerfuracaoEnum;

  decisaoRemocaoEnum = DecisaoRemocaoEnum;

  constructor(private authService: AuthMineradoraService,
              private route: ActivatedRoute,
              private atividadePerfuracaoService: AtividadePerfuracaoService,
              private router: Router,
              private modalService: BsModalService,
              private toast: ToastrService) {
    this.decisoesRemocao = Object.keys(this.decisaoRemocaoEnum).filter(String);
    this.decisoesProblema = Object.keys(this.simNaoEnum).filter(String);
  }

  ngOnInit() {
    this.authService.recuperaUsuarios().subscribe((u: Array<UsuarioMineradora>) =>  this.usuariosMineradora = u);

    if (!this.atividadePerfuracao.usuarioMineradora) {
       this.atividadePerfuracao.usuarioMineradora = new UsuarioMineradora();
    }

    this.route.params.subscribe(params => {
      const id = params.id;
      if (!isNaN(id)) {
        this.findById(id);
      }
    });
  }

  findById(id: number) {
    this.atividadePerfuracaoService.findById(id).subscribe((atividadePerfuracao: AtividadePerfuracao) => {
      this.atividadePerfuracao = atividadePerfuracao;
      this.authService.recuperaUsuarioPorId(this.atividadePerfuracao.usuarioMineradoraId)
       .subscribe((u: UsuarioMineradora) => this.atividadePerfuracao.usuarioMineradora = u);
      this.atividadePerfuracaoService.recuperaTarefasPorOperador(this.atividadePerfuracao.usuarioMineradoraId)
        .subscribe((tasks: Array<Task>) => this.task = tasks[0]);
      this.rangeDatas = new Array<Date>();
      this.rangeDatas.push(atividadePerfuracao.dataInicioAtividade);
      this.rangeDatas.push(atividadePerfuracao.dataTerminoAtividade);
    });
  }


  incluiAtividade() {

    if (!this.rangeDatas || this.rangeDatas.length < 2) {
      this.toast.warning('É obrigatório informar as datas de início e previsão de término da atividade');
      return;
    }

    this.atividadePerfuracao.dataInicioAtividade = this.rangeDatas[0];
    this.atividadePerfuracao.dataTerminoAtividade = this.rangeDatas[1];
    this.atividadePerfuracao.usuarioMineradoraId = this.atividadePerfuracao.usuarioMineradora.id;

    this.atividadePerfuracaoService.incluiAtividade(this.atividadePerfuracao).subscribe((atividadePerfuracao: AtividadePerfuracao) =>  {
       this.toast.success(MSG_SALVO_SUCESSO);
       this.router.navigate(['private/bpm-perfuracao/' + atividadePerfuracao.id]);
    }, error => {
       if (error.error.message.includes('atividade')) {
        this.toast.warning(error.error.message);
       } else {
          this.toast.error('Ocorreu um erro ao incluir a atividade de perfuração.');
       }
    });
 }

 changeProblema() {
  if (this.simNaoEnum[this.modelSimNaoProblema] === 'Sim') {
    this.bsModalRef = this.modalService.show(ModalRegistroProblemaComponent, {class: 'modal-lg'});
  }
 }

 concluiAtividade() {

  if (this.task.taskDefinitionKey === this.bpmAtividadePerfuracaoEnum.INDENTIFICA_FALHA_NAS_ROCHAS) {
    if (!this.modelDecisaoRemocao) {
     this.toast.warning('É obrigatório informar a forma de remoção.');
     return;
    }
    this.task.actionType = this.modelDecisaoRemocao.toLocaleLowerCase();
  }

  if (this.task.taskDefinitionKey === this.bpmAtividadePerfuracaoEnum.DESMONTA_ROCHA_EXPLOSIVOS
    || this.task.taskDefinitionKey === this.bpmAtividadePerfuracaoEnum.DESMONTA_ROCHA_EQUIPAMENTOS) {

    if (!this.modelSimNaoProblema) {
     this.toast.warning('É obrigatório informar se existiu algum problema.');
     return;
    }

    if (this.simNaoEnum[this.modelSimNaoProblema] === 'Sim') {
      this.task.actionType = 'problema';
    } else {
      this.task.actionType = 'fimAtividadePerfuracao';
    }

  }

  this.atividadePerfuracaoService.concluiAtividade(this.task).subscribe(() => {
      this.toast.success('Atividade concluída com sucesso');
      this.findById(this.atividadePerfuracao.id);
  });

 }
}
