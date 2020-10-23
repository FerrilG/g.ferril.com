import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsRoutingModule } from './project-routing.module';
import { ProjectsComponent } from './projects.component';

@NgModule({
    declarations: [
        ProjectsComponent,
    ],
    imports: [
        CommonModule,
        ProjectsRoutingModule,
    ],
    providers: [
    ],
    exports: [
        ProjectsRoutingModule,
        ProjectsComponent,
    ]
})
export class ProjectsModule { }
