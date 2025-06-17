import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard').then(m => m.Dashboard)
  },
  {
    path: 'posts',
    loadChildren: () => import('./post/post.routes').then(m => m.POST_ROUTES)
  },
  {
    path: '**',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }
];