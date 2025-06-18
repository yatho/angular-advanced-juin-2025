import { provideHttpClient, withFetch } from "@angular/common/http";
import { provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from "@angular/core";
import { provideClientHydration, withEventReplay } from "@angular/platform-browser";
import { provideRouter, withComponentInputBinding } from "@angular/router";
import { provideLogger, LoggerLevel } from "my-lib";
import { routes } from "./routes";

export const appConfig = {
    providers: [
        provideRouter(routes, withComponentInputBinding()),
        provideBrowserGlobalErrorListeners(),
        provideZonelessChangeDetection(),
        provideHttpClient(withFetch()),
        provideLogger(LoggerLevel.DEBUG), provideClientHydration(withEventReplay())
    ]
};
