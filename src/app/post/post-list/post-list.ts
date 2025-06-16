import { Component, inject } from '@angular/core';
import { Post } from '../services/post';

@Component({
  selector: 'app-post-list',
  standalone: false,
  templateUrl: './post-list.html',
  styleUrl: './post-list.css'
})
export class PostList {
  protected posts$ = inject(Post).getPosts();
}
