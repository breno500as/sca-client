import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastMessageErrorInterceptor } from './services/http-interceptors/toast-message-error-interceptor';
import { AuthMineradoraGuardService } from './services/auth-mineradora/auth-mineradora-guard.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        AuthMineradoraGuardService,
        { provide: HTTP_INTERCEPTORS, useClass: ToastMessageErrorInterceptor, multi: true }
      ]
    };
}
 }
