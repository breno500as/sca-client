import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-private-modal-registro-problema',
  templateUrl: './modal-registro-problema.component.html',
  styleUrls: ['./modal-registro-problema.component.css']
})
export class ModalRegistroProblemaComponent implements OnInit {

  constructor(public bsModalRef: BsModalRef) {}

  ngOnInit() {
  }

  incluiProblema() {
    this.bsModalRef.hide();
  }

}
