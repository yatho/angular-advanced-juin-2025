import { createComponent, EnvironmentInjector, inject, Injectable, InjectionToken, Injector, TemplateRef } from '@angular/core';
import { ToasterCpt } from './toaster-cpt/toaster-cpt';

export interface ToastData {
  text?: string;
  tpl?: TemplateRef<any>;
}

export const TOAST_DATA = new InjectionToken<ToastData>('TOAST_DATA');

export const DEFAULT_TIMER = 5000;

@Injectable({
  providedIn: 'root'
})
export class Toaster {
  private readonly injector = inject(EnvironmentInjector);

  show(data: ToastData): void {
    const hostElement = document.createElement('div');
    document.body.appendChild(hostElement);
    const toasterRef = createComponent(ToasterCpt, {
      hostElement: hostElement,
      environmentInjector: this.injector,
      elementInjector: Injector.create({
        providers: [
          {
            provide: TOAST_DATA,
            useValue: data
          }
        ]
      })
    });
    toasterRef.changeDetectorRef.detectChanges();

    setTimeout(() => {
      toasterRef.destroy();
      document.body.removeChild(hostElement);
    }, DEFAULT_TIMER);
  }
}
