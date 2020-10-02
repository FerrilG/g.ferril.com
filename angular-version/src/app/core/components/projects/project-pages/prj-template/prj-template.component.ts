import { Component, OnInit } from '@angular/core';
import { ProjectProperties } from '../../../../../config/types/projects.config';
import { ProjectTemplateService } from '../../../../services/projects.service';
import { PageScrollerService } from '../../../../../services/page-scroller.service';

@Component({
    templateUrl: './prj-template.component.html',
    styleUrls: ['./prj-template.component.scss']
})
export class PrjTemplateComponent implements OnInit {
    public content: ProjectProperties = this.projectService.renderContent();

    constructor(
        private projectService: ProjectTemplateService,
        private pageScrollerService: PageScrollerService,
    ) { }

    ngOnInit() { }
}
