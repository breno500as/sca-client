import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-private-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  showCrudMenu = false;
  showBpmMenu = false;
  showMonitorMenu = false;
  showRelatorioMenu = false;

  constructor() { }

  ngOnInit() {
  }

}
