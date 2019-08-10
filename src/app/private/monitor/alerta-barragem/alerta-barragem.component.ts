import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Alerta } from 'src/app/classes/alerta';
import { NivelAlertaEnum } from 'src/app/enum/nivel-alerta-enum';
import { AlertaService } from '../../services/alerta.service';

@Component({
  selector: 'app-alerta-barragem',
  templateUrl: './alerta-barragem.component.html',
  styleUrls: ['./alerta-barragem.component.css']
})
export class AlertaBarragemComponent implements OnInit {

  alerta: Alerta = new Alerta();

  @ViewChild('alertaForm')
  alertaForm: NgForm;

  keys: any[];
  nivelAlertaEnum = NivelAlertaEnum;

  constructor(private alertaService: AlertaService, private toast: ToastrService) {
    this.keys = Object.keys(this.nivelAlertaEnum).filter(String);
   }

  ngOnInit() {
  }

  enviaAlerta() {
      this.alertaService.enviaAlerta(this.alerta).subscribe((ok: string) => {
         this.alerta = new Alerta();
         this.alertaForm.resetForm();
         this.toast.success('Alerta enviado com sucesso!');
      }, (erro) => this.toast.error('Ocorreu um erro ao enviar o alerta!'));
  }

}
