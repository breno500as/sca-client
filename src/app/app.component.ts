import { Component } from '@angular/core';
import { Spinkit } from 'ng-http-loader';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sca-client';
  public spinkit = Spinkit;

  constructor(public router: Router) {

  }

}
