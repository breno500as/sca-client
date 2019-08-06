import { Component, OnInit, ViewChild } from '@angular/core';
import { Insumo } from 'src/app/classes/insumo';
import { InsumoService } from 'src/app/private/services/insumo.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

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

  pagina = 1;

  total = 10;

  constructor(private insumoService: InsumoService, private router: Router, private toast: ToastrService) { }

  ngOnInit() {
    this.pesquisar();
  }

  pesquisar() {

     this.insumoService.pesquisar(this.filtro).subscribe((insumos: Array<Insumo>) => {
        this.insumos = insumos;
     }, (erro) => {
        this.toast.error('Ocorreu um erro ao pesquisar o insumo');
     });
  }

  pageChanged(event: any) {
    this.pagina = event.page;
    this.pesquisar();
  }

  selecionaInsumo(insumo: Insumo) {
    this.router.navigate(['/private/insumo/' + insumo.id]);
  }

}
