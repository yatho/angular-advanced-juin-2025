import { Component, inject, signal } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
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
