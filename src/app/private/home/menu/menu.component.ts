import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-private-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input()
  responsivo: boolean;

  showCrudMenu = false;
  showBpmMenu = false;
  showMonitorMenu = false;
  showRelatorioMenu = false;

  constructor() { }

  ngOnInit() {
  }

}
