import { TimeEntryComponent } from './time-entry/time-entry.component';
import { EcommerceRewardsComponent } from './ecommerce-rewards/ecommerce-rewards.component';
import { FolioStudyComponent } from './folio-study/folio-study.component';
import { DesignSystemComponent } from './design-system/design-system.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectsComponent } from './work/work.component';

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
      },
      {
        path: 'folio-study',
        component: FolioStudyComponent,
        data: {
          breadcrumb: 'Portfolio'
        }
      },
      {
        path: 'ecommerce-rewards',
        component: EcommerceRewardsComponent,
        data: {
          breadcrumb: 'eCommerce Rewards'
        }
      },
      {
        path: 'time-entry',
        component: TimeEntryComponent,
        data: {
          breadcrumb: 'Time Billable'
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
