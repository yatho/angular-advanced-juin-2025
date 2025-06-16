import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { MyLib } from 'my-lib';
import { Dashboard } from './dashboard/dashboard';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { Header } from './header/header';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  declarations: [
    App,
    Dashboard,
    Header
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MyLib,
    MatProgressBarModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideHttpClient(withFetch())
  ],
  bootstrap: [App]
})
export class AppModule { }
