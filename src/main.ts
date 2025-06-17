import { bootstrapApplication } from '@angular/platform-browser';

import { provideBrowserGlobalErrorListeners, provideZonelessChangeDetection, importProvidersFrom } from '@angular/core';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { routes } from './app/routes';
import { App } from './app/app';
import { provideRouter, withComponentInputBinding } from '@angular/router';

bootstrapApplication(App, {
    providers: [
      provideRouter(routes, withComponentInputBinding()),
        provideBrowserGlobalErrorListeners(),
        provideZonelessChangeDetection(),
        provideHttpClient(withFetch())
    ]
})
  .catch(err => console.error(err));
