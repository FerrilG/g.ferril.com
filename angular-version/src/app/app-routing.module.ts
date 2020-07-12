import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/pages/home/home.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    outlet: 'page',
    data: {
      breadcrumb: 'Homepage'
    }
  },
  {
    path: 'work',
    outlet: 'page',
    loadChildren: () => import('./modules/pages/projects/projects.module').then(m => m.ProjectsModule),
    data: {
      breadcrumb: 'Projects'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
