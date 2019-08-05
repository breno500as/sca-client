import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthMineradoraService } from 'src/app/core/services/auth-mineradora/auth-mineradora.service';

@Component({
  selector: 'app-private-login',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private authService: AuthMineradoraService, private router: Router) { }


  ngOnInit() {
  }

  logout() {
     this.authService.logout();
     this.router.navigate(['/login']);
  }

}
