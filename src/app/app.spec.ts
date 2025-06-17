import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { App } from './app';
import { Header } from './header/header';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [
        Header,
        App
    ],
    providers: [provideRouter([]),provideZonelessChangeDetection()]
}).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
