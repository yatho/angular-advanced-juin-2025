import { TestBed } from '@angular/core/testing';

import { Post } from './post';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';

describe('Post', () => {
  let service: Post;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideZonelessChangeDetection(),
        provideHttpClient()
      ]
    });
    service = TestBed.inject(Post);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
