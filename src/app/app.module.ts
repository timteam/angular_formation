import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// External libraries
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { UiModuleModule } from './ui-module/ui-module.module';
import { PageNotFoundModule } from './page-not-found/page-not-found.module';
import { LoginModule } from './login/login.module';
import { AppRoutingModule } from './app-routing.module';
import { PrestationModule } from './prestation/prestation.module';
import { Router } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UiModuleModule,
    LoginModule,
    PrestationModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    PageNotFoundModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  // Diagnostic only: inspect router configuration
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }

}
