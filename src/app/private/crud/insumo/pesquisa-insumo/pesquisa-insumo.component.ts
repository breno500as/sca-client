import { Component, OnInit, ViewChild } from '@angular/core';
import { Insumo } from 'src/app/classes/insumo';
import { InsumoService } from 'src/app/private/services/insumo.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { TipoInsumo } from 'src/app/classes/tipoInsumo';
import { MSG_EXCLUIDO_SUCESSO } from 'src/app/core/helpers/util';

@Component({
  selector: 'app-pesquisa-insumo',
  templateUrl: './pesquisa-insumo.component.html',
  styleUrls: ['./pesquisa-insumo.component.css']
})
export class PesquisaInsumoComponent implements OnInit {

  @ViewChild('consultaInsumoForm')
  consultaInsumoForm: NgForm;

  filtro: Insumo = new Insumo();

  insumos: Array<Insumo>;

  tiposInsumo: Array<TipoInsumo>;

  currentPage = 1;

  totalElementos = 0;

  maxSize = 10;

  constructor(private insumoService: InsumoService, private router: Router, private toast: ToastrService) { }

  ngOnInit() {
    this.pesquisa();
    this.insumoService.recuperaTipoInsumo().subscribe((tiposInsumo: Array<TipoInsumo>) => this.tiposInsumo = tiposInsumo);
  }

  pesquisa() {

     this.insumoService.pesquisa(this.filtro, this.currentPage, this.maxSize).subscribe((result: any) =>  {
       this.insumos = result;
       if (this.insumos && this.insumos.length > 0) {
         this.totalElementos = this.insumos[0].totalElementos;
       } else {
          this.totalElementos = 0;
       }
     }, () => {
        this.toast.error('Ocorreu um erro ao pesquisar o insumo');
     });
  }

  pageChanged(event: any) {
    this.currentPage = event.page;
    this.pesquisa();
  }

  seleciona(insumo: Insumo) {
    this.router.navigate(['private/insumo/' + insumo.id]);
  }

  deleta(insumo: Insumo) {
     this.insumoService.deleta(insumo).subscribe(() => {
          this.toast.success(MSG_EXCLUIDO_SUCESSO);
          this.pesquisa();
     });
  }

}
