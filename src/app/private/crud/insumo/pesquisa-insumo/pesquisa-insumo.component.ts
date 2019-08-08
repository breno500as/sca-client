import { Component, OnInit, ViewChild } from '@angular/core';
import { Insumo } from 'src/app/classes/insumo';
import { InsumoService } from 'src/app/private/services/insumo.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { TipoInsumo } from 'src/app/classes/tipoInsumo';

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

  page = 0;

  size = 0;

  constructor(private insumoService: InsumoService, private router: Router, private toast: ToastrService) { }

  ngOnInit() {
    this.pesquisa();
    this.insumoService.recuperaTipoInsumo().subscribe((tiposInsumo: Array<TipoInsumo>) => this.tiposInsumo = tiposInsumo);
  }

  pesquisa() {

     this.insumoService.pesquisa(this.filtro, this.page, this.size).subscribe((result: any) =>  {
       this.insumos = result;
       if (this.insumos && this.insumos.length > 0) {
         this.size = this.insumos[0].totalElementos;
       }
     }, () => {
        this.toast.error('Ocorreu um erro ao pesquisar o insumo');
     });
  }

  pageChanged(event: any) {
    this.page = event.page;
    this.pesquisa();
  }

  selecionaInsumo(insumo: Insumo) {
    this.router.navigate(['private/insumo/' + insumo.id]);
  }

}
