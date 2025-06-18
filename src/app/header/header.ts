import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Post } from '../post/services/post';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrl: './header.css',
  imports: [RouterLink]
})
export class Header {
  private readonly postService = inject(Post);
  protected selectedAuthors = this.postService.selectedAuthors;
  protected selectedPosts = this.postService.selectedPosts;
}
