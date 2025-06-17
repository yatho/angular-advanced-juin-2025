import { Component, inject, signal } from '@angular/core';
import { NavigationEnd, NavigationStart, Router, RouterOutlet } from '@angular/router';

import { MatProgressBar } from '@angular/material/progress-bar';
import { Header } from './header/header';

@Component({
    selector: 'app-root',
    templateUrl: './app.html',
    styleUrl: './app.css',
    imports: [MatProgressBar, Header, RouterOutlet]
})
export class App {
  protected title = 'angularAdvanced';
  protected isLoading = signal(false);

  constructor() {
    inject(Router).events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        console.log('Navigation started');
        this.isLoading.set(true);
      }
      if (event instanceof NavigationEnd) {
        console.log('Navigation ended');
        this.isLoading.set(false);
      }
    });
  }
}
