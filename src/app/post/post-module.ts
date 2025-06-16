import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing-module';
import { PostList } from './post-list/post-list';
import { PostDetail } from './post-detail/post-detail';

import { MatCardModule } from '@angular/material/card'; // Assuming this is a custom module for Material cards
import { Author } from './author/author';


@NgModule({
  declarations: [
    PostList,
    PostDetail,
    Author
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    MatCardModule
  ]
})
export class PostModule { }
