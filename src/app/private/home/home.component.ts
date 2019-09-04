import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { AuthMineradoraService } from 'src/app/core/services/auth-mineradora/auth-mineradora.service';

@Component({
  selector: 'app-private-login',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private authService: AuthMineradoraService, private router: Router,  private elRef: ElementRef) { }


  ngOnInit() {
    this.elRef.nativeElement.ownerDocument.body.style.backgroundColor = '#eee';
  }

  logout() {
     this.authService.logout();
     this.router.navigate(['/login']);
  }

}
