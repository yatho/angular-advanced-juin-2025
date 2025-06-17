import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostList } from './post-list';
import { provideZonelessChangeDetection } from '@angular/core';
import { Post } from '../services/post';
import {vi} from 'vitest';

describe('PostList', () => {
  let component: PostList;
  let fixture: ComponentFixture<PostList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [
        PostList
    ],
    providers: [
        provideZonelessChangeDetection(),
        {
            provide: Post,
            useValue: {
                getPosts: vi.fn()
            }
        }
    ]
})
    .compileComponents();

    fixture = TestBed.createComponent(PostList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
