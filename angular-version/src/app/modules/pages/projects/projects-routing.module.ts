import { DesignSystemComponent } from './design-system/design-system.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectsComponent } from './projects/projects.component';

const projectRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ProjectsComponent,
      },
      {
        path: 'design-system',
        component: DesignSystemComponent,
        data: {
          breadcrumb: 'Design System'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(projectRoutes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
