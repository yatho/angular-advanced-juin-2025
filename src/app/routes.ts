import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'about',
    loadComponent: () => import('./about/about').then(c => c.About)
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard').then(m => m.Dashboard)
  },
  {
    path: 'author',
    loadChildren: () => import('./author/author.routes')
  },
  {
    path: 'posts',
    loadChildren: () => import('./post/post.routes').then(m => m.POST_ROUTES)
  },
  {
    path: 'form',
    loadChildren: () => import('./form/form.routes').then(m => m.FORM_ROUTES)
  },
  {
    path: '**',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }
];