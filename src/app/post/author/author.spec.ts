import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Author } from './author';
import { provideZonelessChangeDetection } from '@angular/core';
import { Authors } from '../services/authors';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { vi } from 'vitest';
import { of } from 'rxjs';
import { MatCardModule } from '@angular/material/card';

describe('Author', () => {
  let component: Author;
  let fixture: ComponentFixture<Author>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Author],
      imports: [
        RouterModule.forRoot([]),
        MatCardModule
      ],
      providers: [
        provideZonelessChangeDetection(),
        {
          provide: ActivatedRoute,
          useValue: {
            data: of({
              post: {
                author: 1
              }
            })
          }
        },
        {
          provide: Authors,
          useValue: {
            getAuthorById: vi.fn().mockReturnValue(of({ id: 1, name: 'Test Author' }))
          }
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Author);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
