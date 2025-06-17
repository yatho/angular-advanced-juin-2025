import { Component, inject } from '@angular/core';
import { Post } from '../services/post';
import { RouterOutlet, RouterLinkActive, RouterLink } from '@angular/router';
import { NgFor, AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.html',
    styleUrl: './post-list.css',
    imports: [RouterOutlet, NgFor, RouterLinkActive, RouterLink, AsyncPipe]
})
export class PostList {
  protected posts$ = inject(Post).getPosts();
}
