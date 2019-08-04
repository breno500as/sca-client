import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthMineradoraService } from '../auth-mineradora/auth-mineradora.service';



@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authMineradoraService: AuthMineradoraService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    const currentUser = this.authMineradoraService.getUser();
    if (currentUser && currentUser.token) {
      req = req.clone({
            setHeaders: {
                Authorization: `Bearer ${currentUser.token}`
            }
        });
    }

    return next.handle(req);
  }
}
