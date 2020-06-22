import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectsComponent } from './projects/projects.component';
import { DesignSystemComponent } from './design-system/design-system.component';

const projectRoutes: Routes = [
  {
    path: 'design-system',
    component: DesignSystemComponent
  },
  {
    path: '',
    component: ProjectsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(projectRoutes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
