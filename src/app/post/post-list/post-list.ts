import { Component, inject } from '@angular/core';
import { Post, PostData } from '../services/post';
import { RouterOutlet, RouterLink } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { Log, LoggerLevel, provideLogger, TplCardList } from 'my-lib';

@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.html',
    styleUrl: './post-list.css',
    imports: [RouterOutlet, RouterLink, TplCardList, AsyncPipe],
    providers: [
      provideLogger(LoggerLevel.INFO)
    ]
})
export class PostList {
  private readonly postService = inject(Post);
  protected posts$ = this.postService.getPosts();
  private readonly log = inject(Log, {
      optional: true
    });

  constructor() {
    this.log?.debug('PostList created');
    this.log?.error('PostList created');
    this.log?.warn('PostList created');
    this.log?.info('PostList created');
  }

  protected selectedPost(post: PostData): void {
    this.postService.selectPost(post);
  }
}
