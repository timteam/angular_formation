import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

// External libraries
import { NgbModule } from '@ng-bootstrap/ng-bootstrap/';
import { AngularFireModule } from '@angular/fire';

import { AppComponent } from './app.component';
import { UiModuleModule } from './ui-module/ui-module.module';
import { PageNotFoundModule } from './page-not-found/page-not-found.module';
import { LoginModule } from './login/login.module';
import { AppRoutingModule } from './app-routing.module';
import { Router } from '@angular/router';

import { registerLocaleData, CurrencyPipe } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { environment } from '../environments/environment.firebase';

registerLocaleData(localeFr, 'fr');

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UiModuleModule,
    LoginModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    PageNotFoundModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'fr' }, CurrencyPipe],
  bootstrap: [AppComponent]
})
export class AppModule {

  // Diagnostic only: inspect router configuration
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }

}
