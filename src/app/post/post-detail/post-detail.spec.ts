import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDetail } from './post-detail';
import { provideZonelessChangeDetection } from '@angular/core';
import { RouterTestingHarness } from '@angular/router/testing';
import { RouterModule } from '@angular/router';

class Page {
  constructor(public nativeElement: HTMLElement) {}

  get postTitle() {
    return this.nativeElement.querySelector('h2')?.textContent ?? '';
  }
}

const postResolver = () => ({ id: 1, title: 'Test Post', content: 'Content of the first post' });

describe('PostDetail', () => {
  let component: PostDetail;
  let fixture: ComponentFixture<PostDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterModule.forRoot([{
        path: 'posts/:id',
        component: PostDetail,
        resolve: {
          post: postResolver
        }
      }], {
        bindToComponentInputs: true
      })],
      providers: [
        provideZonelessChangeDetection()
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostDetail);
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
    
    expect(component['post']?.id).toBe(1);
    expect(page.postTitle).toContain('Test Post');
  });
});
