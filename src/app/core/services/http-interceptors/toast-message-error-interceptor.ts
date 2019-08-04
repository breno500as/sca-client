import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { ToastrService } from 'ngx-toastr';


@Injectable()
export class ToastMessageErrorInterceptor implements HttpInterceptor {

  constructor(private toastService: ToastrService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    this.toastService.error('Ocorreu um erro');
    return next.handle(req);
  }
}
