import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { ProjectProperties } from 'src/app/config/types/projects.config';
import { ProjectTemplateService } from 'src/app/core/services/projects.service';

@Component({
    templateUrl: './project-wrapper.component.html',
    styleUrls: ['./project-wrapper.component.scss']
})
export class ProjectWrapperComponent implements AfterContentChecked {
    public content: ProjectProperties;

    constructor(private projectService: ProjectTemplateService) { }

    ngAfterContentChecked() {
        this.content = this.projectService.renderContent();
    }
}
