import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsRoutingModule } from './project-routing.module';
import { ProjectsComponent } from 'src/app/core/components/projects/project-pages/project-main/projects.component';
import { ProjectWrapperComponent } from 'src/app/core/components/projects/project-pages/project-wrapper/project-wrapper.component';

@NgModule({
    declarations: [
        ProjectsComponent,
        ProjectWrapperComponent,
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
        ProjectWrapperComponent,
    ]
})
export class ProjectsModule { }
