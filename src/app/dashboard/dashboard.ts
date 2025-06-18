import { Component, inject } from '@angular/core';
import { Log, Toaster } from 'my-lib';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.html',
    styleUrl: './dashboard.css'
})
export class Dashboard {

    private readonly toaster = inject(Toaster);

    constructor() {
        const log = inject(Log, {
            optional: true
        });
        log?.info('Dashboard component created');
        log?.warn('Dashboard component created');
        log?.error('Dashboard component created');
        log?.debug('Dashboard component created');
    }

    openToaster() {
        this.toaster.show({
            text: 'A wonderfull toaster'
        });
    }
}
