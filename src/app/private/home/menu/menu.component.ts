import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-private-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input()
  responsivo: boolean;

  @Output()
  emitter = new EventEmitter();

  showCrudMenu = true;
  showBpmMenu = true;
  showMonitorMenu = true;
  showRelatorioMenu = true;

  constructor() { }

  ngOnInit() {
  }

  logout() {
    this.emitter.emit();
  }

}
