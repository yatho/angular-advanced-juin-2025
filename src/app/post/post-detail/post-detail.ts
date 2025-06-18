import { Component, input } from '@angular/core';
import { PostData } from '../services/post';

import { MatCard } from '@angular/material/card';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.html',
  styleUrl: './post-detail.css',
  imports: [MatCard, NgOptimizedImage]
})
export class PostDetail {
  protected readonly post = input.required<PostData | undefined>();
}
