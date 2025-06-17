import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorForm } from './author-form';
import { provideZonelessChangeDetection } from '@angular/core';
import { Authors } from '../../post/services/authors';

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
          useValue: {}
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthorForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
