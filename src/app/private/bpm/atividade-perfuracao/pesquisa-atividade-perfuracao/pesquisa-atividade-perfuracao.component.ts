import { Component, OnInit, ViewChild } from '@angular/core';
import { AtividadePerfuracao } from 'src/app/classes/atividadePerfuracao';
import { NgForm } from '@angular/forms';
import { UsuarioMineradora } from 'src/app/classes/usuarioMineradora';
import { ToastrService } from 'ngx-toastr';
import { AuthMineradoraService } from 'src/app/core/services/auth-mineradora/auth-mineradora.service';
import { AtividadePerfuracaoService } from 'src/app/private/services/atividade-perfuracao.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-private-pesquisa-atividade-perfuracao',
  templateUrl: './pesquisa-atividade-perfuracao.component.html',
  styleUrls: ['./pesquisa-atividade-perfuracao.component.css']
})
export class PesquisaAtividadePerfuracaoComponent implements OnInit {

  filtro  = new AtividadePerfuracao();

  usuariosMineradora: Array<UsuarioMineradora>;

  atividadesPerfuracao: Array<AtividadePerfuracao>;

  currentPage = 1;

  totalElementos = 0;

  maxSize = 10;

  @ViewChild('consultaAtvPerfuracaoForm')
  consultaAtvPerfuracaoForm: NgForm;

  constructor(private authService: AuthMineradoraService,
              private atividadePerfuracaoService: AtividadePerfuracaoService,
              private router: Router,
              private toast: ToastrService) { }

  ngOnInit() {
    this.pesquisa();
    this.authService.recuperaUsuarios().subscribe((u: Array<UsuarioMineradora>) =>  this.usuariosMineradora = u);
  }

  pesquisa() {

     this.atividadePerfuracaoService.pesquisa(this.filtro, this.currentPage, this.maxSize).subscribe((r: Array<AtividadePerfuracao>) =>  {
       this.atividadesPerfuracao = r;
       if (this.atividadesPerfuracao && this.atividadesPerfuracao.length > 0) {
         this.totalElementos = this.atividadesPerfuracao[0].totalElementos;
         this.atividadesPerfuracao.forEach(atv => this.authService
          .recuperaUsuarioPorId(atv.usuarioMineradoraId).subscribe(u => atv.usuarioMineradora = u));

       } else {
          this.totalElementos = 0;
       }
     }, () => {
        this.toast.error('Ocorreu um erro ao pesquisar as atividades perfuração');
     });
  }

  pageChanged(event: any) {
    this.currentPage = event.page;
    this.pesquisa();
  }

  seleciona(atividadePerfuracao: AtividadePerfuracao) {
    this.router.navigate(['private/bpm-perfuracao/' + atividadePerfuracao.id]);
  }

}
