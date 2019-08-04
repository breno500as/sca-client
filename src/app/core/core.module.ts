import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthMineradoraGuardService } from './services/auth-mineradora/auth-mineradora-guard.service';
import { AuthInterceptor } from './services/http-interceptors/auth-interceptor';
import { LoginService } from './services/login.service';
import { AuthMineradoraService } from './services/auth-mineradora/auth-mineradora.service';
import { ActivatePublicGuardService } from './services/auth-mineradora/activate-public-guard.service';
import { DeactivatePrivateGuardService } from './services/auth-mineradora/deactivate-private.service';

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
        DeactivatePrivateGuardService,
        ActivatePublicGuardService,
        LoginService,
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
      ]
    };
}
 }
