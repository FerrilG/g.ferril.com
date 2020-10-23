import { Component, OnInit } from '@angular/core';
import { ProjectProperties } from 'src/app/config/types/projects.config';
import { ProjectTemplateService } from 'src/app/core/services/projects.service';
import { PageScrollerService } from 'src/app/services/page-scroller.service';

@Component({
    templateUrl: './portfolio.component.html',
    // styleUrls: ['./portfolio.component.scss']
})
export class PrjPortfolioComponent implements OnInit {

    public content: ProjectProperties = this.projectService.renderContent();
    public imgFolder: string = this.content.cover + this.content.folder + '/';

    constructor(
        private projectService: ProjectTemplateService,
        // private pageScrollerService: PageScrollerService,
    ) { }

    ngOnInit() {
        // console.log(this.content);
        // console.log(this.imgFolder);
    }

}
