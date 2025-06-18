import { inject, Injectable, InjectionToken, Provider } from '@angular/core';

export const provideLogger = (loggerLevel?: LoggerLevel): Provider[] => {
  return [
    {
      provide: LOGGER_LEVEL,
      useFactory: () => loggerLevel??DEFAULT_LOGGER_LEVEL
    },
    Log
  ]
}

export enum LoggerLevel {
  INFO,
  WARN,
  ERROR,
  DEBUG,
}

const DEFAULT_LOGGER_LEVEL = LoggerLevel.INFO;

export const LOGGER_LEVEL = new InjectionToken<LoggerLevel>('LOGGER_LEVEL');

@Injectable()
export class Log {
  private readonly loggerLevel = inject(LOGGER_LEVEL);

  info(msg: string): void {
    this.log(LoggerLevel.INFO, 'Info: ' + msg);
  }
  warn(msg: string): void {
    this.log(LoggerLevel.WARN, 'Warn: ' + msg);
  }
  error(msg: string): void {
    this.log(LoggerLevel.ERROR, 'Error: ' + msg);
  }
  debug(msg: string): void {
    this.log(LoggerLevel.DEBUG, 'Debug: ' + msg);
  }

  private log(lvl: LoggerLevel, msg: string): void {
    if (lvl > this.loggerLevel) return;
    switch (lvl) {
      case LoggerLevel.INFO:
        return console.info('%c' + msg, 'color: #6495ED');
      case LoggerLevel.WARN:
        return console.warn('%c' + msg, 'color: #FF8C00');
      case LoggerLevel.ERROR:
        return console.error('%c' + msg, 'color: #DC143C');
      default:
        console.debug(msg);
    }
  }
}
