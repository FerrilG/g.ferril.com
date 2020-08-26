
import { ProjectProperties } from 'src/app/config/projects.config';
import { ProjectService } from 'src/app/core/services/projects.service';
import { Component, OnInit } from '@angular/core';
import { PageScrollerService } from 'src/app/services/page-scroller.service';

@Component({
    templateUrl: './portfolio.component.html',
    styleUrls: ['./portfolio.component.scss']
})
export class PrjPortfolioComponent implements OnInit {
    public content: ProjectProperties = this.projectService.renderContent();

    constructor(
        private projectService: ProjectService,
        private pageScrollerService: PageScrollerService,
    ) {
        // console.log(this.content);
    }

    ngOnInit() { }
}
