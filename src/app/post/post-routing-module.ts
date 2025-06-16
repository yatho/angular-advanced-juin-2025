import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostDetail } from './post-detail/post-detail';
import { Author } from './author/author';
import { PostList } from './post-list/post-list';
import { postResolver } from './post-resolver';

const routes: Routes = [
  {
    path: '',
    component: PostList,
    children: [
      {
        path: ':id',
        resolve: {
          post: postResolver
        },
        title: 'Post list',
        children: [
          {
            path: '',
            component: PostDetail,
          },
          {
            path: '',
            outlet: 'author',
            component: Author
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
