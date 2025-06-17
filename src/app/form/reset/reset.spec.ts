import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reset } from './reset';
import { provideZonelessChangeDetection } from '@angular/core';

describe('Reset', () => {
  let component: Reset;
  let fixture: ComponentFixture<Reset>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Reset],
      providers: [
        provideZonelessChangeDetection()
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Reset);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
