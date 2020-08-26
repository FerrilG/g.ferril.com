import { PageScrollerService } from './../../../../../modules/components/page-scroller/page-scroller.service';
import { ProjectProperties } from 'src/app/config/projects.config';
import { filter, map } from 'rxjs/operators';
// import { data } from 'src/app/config/params/project-list.json';
import { ProjectService } from 'src/app/core/services/projects.service';
import { Component, OnInit, AfterContentInit, AfterViewInit, AfterViewChecked } from '@angular/core';

@Component({
    templateUrl: './portfolio.component.html',
    styleUrls: ['./portfolio.component.scss']
})
export class PrjPortfolioComponent implements OnInit, AfterViewChecked {
    public content: ProjectProperties = this.projectService.renderContent();

    constructor(
        private projectService: ProjectService,
        private pageScrollerService: PageScrollerService,
    ) {
        console.log(this.content);
    }

    ngOnInit() { }

    ngAfterViewChecked() {
        this.pageScrollerService.renderScrollList();
    }

}
