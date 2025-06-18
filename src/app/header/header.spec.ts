import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Header } from './header';
import { provideZonelessChangeDetection, signal } from '@angular/core';
import { provideRouter } from '@angular/router';
import { Post } from '../post/services/post';

describe('Header', () => {
  let component: Header;
  let fixture: ComponentFixture<Header>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Header],
      providers: [
        provideRouter([]),
        provideZonelessChangeDetection(),
        {
          provide: Post,
          useValue: {
            selectedPosts: signal([]),
            selectedAuthors: signal([])
          }
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Header);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have two links', () => {
    const links = fixture.nativeElement.querySelectorAll('a');
    expect(links.length).toBe(7);
    expect(links[0].textContent).toBe('Dashboard');
    expect(links[1].textContent).toBe('Posts');
  });
});
