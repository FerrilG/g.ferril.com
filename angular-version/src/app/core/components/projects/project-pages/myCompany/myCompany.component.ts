import { ProjectTemplateService } from './../../../../services/projects.service';
import { Component } from '@angular/core';
import { ProjectProperties } from 'src/app/config/types/projects.config';

@Component({
    templateUrl: './myCompany.component.html',
    styleUrls: ['./myCompany.component.scss']
})
export class PrjmyCompanyComponent {

    private content: ProjectProperties = this.projectService.renderContent();
    public imgFolder: string = this.content.cover + this.content.folder + '/';

    constructor(private projectService: ProjectTemplateService) { }
}
