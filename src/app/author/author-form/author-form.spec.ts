import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorForm } from './author-form';
import { provideZonelessChangeDetection } from '@angular/core';
import { Authors } from '../../post/services/authors';
import { vi } from 'vitest';
import { of } from 'rxjs';

describe('AuthorForm', () => {
  let component: AuthorForm;
  let fixture: ComponentFixture<AuthorForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthorForm],
      providers: [
        provideZonelessChangeDetection(),
        {
          provide: Authors,
          useValue: {
            getAuthorById: vi.fn().mockReturnValue(of())
          }
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthorForm);
    fixture.componentRef.setInput('id', 1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
