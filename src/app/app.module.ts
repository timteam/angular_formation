import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UiModuleModule } from './ui-module/ui-module.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UiModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
