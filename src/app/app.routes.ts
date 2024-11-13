import { Routes } from '@angular/router';
import { HomeComponent } from './features/components/home/home.component';

export const routes: Routes = [
  {
    path: '',
   component:  HomeComponent,
  },
  {
    path: 'blogs',
    loadComponent: () => import('./features/components/blogs/blogs.component').then(m => m.BlogsComponent),
  },
//   {
//     path: 'work',
//     loadComponent: () => import('./features/components/work/work.component'),
//   },
//   {
//     path: 'blog',
//     loadComponent: () => import('./features/components/blog/blog.component'),
//   },
//   {
//     path: 'contact',
//     loadComponent: () => import('./features/components/contact/contact.component'),
//   },
];
