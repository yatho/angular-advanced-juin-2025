import { Component, Input } from '@angular/core';
import { PostData } from '../services/post';
import { NgIf } from '@angular/common';
import { MatCard } from '@angular/material/card';

@Component({
    selector: 'app-post-detail',
    templateUrl: './post-detail.html',
    styleUrl: './post-detail.css',
    imports: [NgIf, MatCard]
})
export class PostDetail {
  @Input({required: true})
  protected post?: PostData;
}
