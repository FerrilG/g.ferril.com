import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './modules/pages/home/home.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      breadcrumb: 'Homepage'
    },
    children: []
  },
  {
    path: 'work',
    loadChildren: () => import('./modules/pages/projects/projects.module').then(m => m.ProjectsModule),
    data: {
      breadcrumb: 'Project'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
