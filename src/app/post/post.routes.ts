import { Routes } from '@angular/router';
import { postResolver } from './post-resolver';

export const POST_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./post-list/post-list').then(m => m.PostList),
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
            loadComponent: () => import('./post-detail/post-detail').then(m => m.PostDetail),
          },
          {
            path: '',
            outlet: 'author',
            loadComponent: () => import('./author/author').then(m => m.Author)
          }
        ]
      }
    ]
  }
];
