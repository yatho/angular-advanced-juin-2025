import { TestBed } from '@angular/core/testing';

import { Authors } from './authors';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('Authors', () => {
  let service: Authors;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideZonelessChangeDetection(),
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });
    service = TestBed.inject(Authors);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
