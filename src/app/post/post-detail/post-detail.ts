import { Component, input } from '@angular/core';
import { PostData } from '../services/post';
import { NgOptimizedImage } from '@angular/common';
import { TplCard } from 'my-lib';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.html',
  styleUrl: './post-detail.css',
  imports: [TplCard, NgOptimizedImage]
})
export class PostDetail {
  protected readonly post = input.required<PostData | undefined>();
}
