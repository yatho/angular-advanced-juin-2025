import { Component, inject } from '@angular/core';
import { Post, PostData } from '../services/post';
import { RouterOutlet, RouterLinkActive, RouterLink } from '@angular/router';
import { AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.html',
    styleUrl: './post-list.css',
    imports: [RouterOutlet, RouterLinkActive, RouterLink, AsyncPipe]
})
export class PostList {
  private readonly postService = inject(Post);
  protected posts$ = this.postService.getPosts();

  protected selectedPost(post: PostData): void {
    this.postService.selectPost(post);
  }
}
