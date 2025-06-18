import { Component, provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { App } from './app';
import { Header } from './header/header';


@Component({
  selector: 'app-header',
  template: ''
}) class HeaderMock {

}

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [
        App
    ],
    providers: [provideRouter([]),provideZonelessChangeDetection()]
}).overrideComponent( App,
  {
    remove: {imports : [Header]},
    add: {imports : [HeaderMock]}
  }
).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
