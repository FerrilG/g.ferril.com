import { filter } from 'rxjs/operators';
// import { data } from 'src/app/config/params/project-list.json';
import { ProjectService } from 'src/app/core/services/projects.service';
import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: './portfolio.component.html',
    styleUrls: ['./portfolio.component.scss']
})
export class PrjPortfolioComponent implements OnInit {
    public content: Array<object>;

    constructor(private _projectContent: ProjectService) { }

    ngOnInit() {
        const thisProject = 'portfolio';
        this.content = this._projectContent.getContent(thisProject);
        console.log(this.content);
    }

}
