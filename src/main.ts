import { bootstrapApplication } from '@angular/platform-browser';

import { provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { routes } from './app/routes';
import { App } from './app/app';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { LoggerLevel, provideLogger } from 'my-lib';

bootstrapApplication(App, {
    providers: [
      provideRouter(routes, withComponentInputBinding()),
        provideBrowserGlobalErrorListeners(),
        provideZonelessChangeDetection(),
        provideHttpClient(withFetch()),
        provideLogger(LoggerLevel.DEBUG)
    ]
})
  .catch(err => console.error(err));
