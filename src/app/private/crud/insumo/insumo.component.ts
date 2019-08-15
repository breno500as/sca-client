import { Component, OnInit, ViewChild } from '@angular/core';
import { Insumo } from 'src/app/classes/insumo';
import { TipoInsumo } from 'src/app/classes/tipoInsumo';
import { InsumoService } from '../../services/insumo.service';
import { SubTipoInsumo } from 'src/app/classes/subTipoInsumo';
import { TipoMarcaModelo } from 'src/app/classes/tipoMarcaModelo';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MSG_SALVO_SUCESSO, MSG_ATUALIZADO_SUCESSO } from 'src/app/core/helpers/util';
import { Router, ActivatedRoute } from '@angular/router';
import { equalsById } from 'src/app/core/helpers/util';

@Component({
  selector: 'app-private-insumo',
  templateUrl: './insumo.component.html',
  styleUrls: ['./insumo.component.css']
})
export class InsumoComponent implements OnInit {

  @ViewChild('insumoForm')
  insumoForm: NgForm;

  insumo: Insumo = new Insumo();

  tiposInsumo: Array<TipoInsumo>;

  subTiposInsumo: Array<SubTipoInsumo>;

  tiposMarcaModelo: Array<TipoMarcaModelo>;

  equalsById = equalsById;

  constructor(private insumoService: InsumoService, private toast: ToastrService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {

    this.insumoService.recuperaTipoInsumo().subscribe((tiposInsumo: Array<TipoInsumo>) => this.tiposInsumo = tiposInsumo);

    this.route.params.subscribe(params => {
      const id = params.id;
      if (!isNaN(id)) {
        this.insumoService.findById(id).subscribe((insumo: Insumo) => {
          this.insumo = insumo;
          this.changeInsumo();
          this.changeSubTipoInsumo();
        });
      }
    });
  }

  changeInsumo() {
    if (this.insumo.tipoInsumo) {
      this.insumoService.recuperaSubTipoInsumo(this.insumo.tipoInsumo).subscribe((subTiposInsumo: Array<SubTipoInsumo>) => this.subTiposInsumo = subTiposInsumo);
    }
  }

  changeSubTipoInsumo() {
    if (this.insumo.subTipoInsumo) {
      this.insumoService.recuperaTipoMarcaModelo(this.insumo.subTipoInsumo).subscribe((tiposMarcaModelo: Array<TipoMarcaModelo>) => this.tiposMarcaModelo = tiposMarcaModelo);
    }
  }

  novo() {
     this.insumo = new Insumo();
     this.insumoForm.resetForm();
     this.router.navigate(['private/insumo/novo']);
  }


  salva() {

     if (this.insumo.id) {
        this.atualiza();
        return;
     }

     this.insumoService.salva(this.insumo).subscribe((insumo: Insumo) =>  {
        this.toast.success(MSG_SALVO_SUCESSO);
        this.router.navigate(['private/insumo/' + insumo.id]);
     });
  }

  atualiza() {
     if (!this.insumo.tipoMarcaModelo) {
       this.insumo.tipoMarcaModelo = new TipoMarcaModelo();
     }
     this.insumoService.atualiza(this.insumo).subscribe((insumo: Insumo) => this.toast.success(MSG_ATUALIZADO_SUCESSO));
  }

}
