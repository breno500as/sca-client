import { NgModule, Optional, SkipSelf, ModuleWithProviders, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthMineradoraGuardService } from './services/auth-mineradora/auth-mineradora-guard.service';
import { AuthInterceptor } from './services/http-interceptors/auth-interceptor';
import { LoginService } from './services/login.service';
import { AuthMineradoraService } from './services/auth-mineradora/auth-mineradora.service';
import { CanActivatePublicGuardService } from './services/auth-mineradora/can-activate-public-guard.service';

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
        AuthMineradoraService,
        CanActivatePublicGuardService,
        LoginService,
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
        { provide: LOCALE_ID, useValue: 'pt' },
      ]
    };
}
 }
