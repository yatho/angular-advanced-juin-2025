import { Component, Input } from '@angular/core';
import { PostData } from '../services/post';

@Component({
  selector: 'app-post-detail',
  standalone: false,
  templateUrl: './post-detail.html',
  styleUrl: './post-detail.css'
})
export class PostDetail {
  @Input()
  protected post?: PostData;
}
