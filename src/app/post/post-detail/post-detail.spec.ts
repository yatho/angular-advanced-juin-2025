import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDetail } from './post-detail';
import { provideZonelessChangeDetection } from '@angular/core';
import { RouterTestingHarness } from '@angular/router/testing';
import { provideRouter, withComponentInputBinding } from '@angular/router';

class Page {
  constructor(public nativeElement: HTMLElement) {}

  get postTitle() {
    return this.nativeElement.querySelector('h2')?.textContent ?? '';
  }
}

const postResolver = () => ({ id: 1, photo: 'https://placehold.co/600x400/darkgrey/green?text=Post+4', title: 'Test Post', content: 'Content of the first post' });

describe('PostDetail', () => {
  let component: PostDetail;
  let fixture: ComponentFixture<PostDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        provideRouter([{
        path: 'posts/:id',
        component: PostDetail,
        resolve: {
          post: postResolver
        }
      }], withComponentInputBinding()),
        provideZonelessChangeDetection()
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostDetail);
    fixture.componentRef.setInput('post', postResolver())
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display post details 1', async () => {
    const harness = await RouterTestingHarness.create();
    const component = await harness.navigateByUrl('/posts/1', PostDetail);
    const page = new Page(harness.routeNativeElement!);
    
    expect(component['post']()?.id).toBe(1);
    expect(page.postTitle).toContain('Test Post');
  });
});
