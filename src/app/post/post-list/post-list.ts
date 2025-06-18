import { Component, inject } from '@angular/core';
import { Post, PostData } from '../services/post';
import { RouterOutlet, RouterLink } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { TplCardList } from 'my-lib';

@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.html',
    styleUrl: './post-list.css',
    imports: [RouterOutlet, RouterLink, TplCardList, AsyncPipe]
})
export class PostList {
  private readonly postService = inject(Post);
  protected posts$ = this.postService.getPosts();

  protected selectedPost(post: PostData): void {
    this.postService.selectPost(post);
  }
}
