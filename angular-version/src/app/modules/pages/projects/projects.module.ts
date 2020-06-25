import { CardModule } from './../../components/card/card.module';
import { CardComponent } from './../../components/card/card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './work/work.component';
import { DesignSystemComponent } from './design-system/design-system.component';
import { FolioStudyComponent } from './folio-study/folio-study.component';
import { EcommerceRewardsComponent } from './ecommerce-rewards/ecommerce-rewards.component';
import { TimeEntryComponent } from './time-entry/time-entry.component';


@NgModule({
  declarations: [
    ProjectsComponent,
    DesignSystemComponent,
    FolioStudyComponent,
    EcommerceRewardsComponent,
    TimeEntryComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    CardModule
  ]
})
export class ProjectsModule { }
