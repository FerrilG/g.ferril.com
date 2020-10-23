import { Component } from '@angular/core';
import { ProjectProperties } from 'src/app/config/types/projects.config';
import { ProjectTemplateService } from 'src/app/core/services/projects.service';

@Component({
    templateUrl: './project-pages/portfolio.component.html',
    styleUrls: ['./project-pages/project-pages.component.scss']
})
export class PrjPortfolioComponent {
    private content: ProjectProperties = this.projectService.renderContent();
    public imgFolder: string = this.content.cover + this.content.folder + '/';

    constructor(private projectService: ProjectTemplateService) { }
}

@Component({
    templateUrl: './project-pages/myCompany.component.html',
    styleUrls: ['./project-pages/project-pages.component.scss']
})
export class PrjmyCompanyComponent {
    private content: ProjectProperties = this.projectService.renderContent();
    public imgFolder: string = this.content.cover + this.content.folder + '/';

    constructor(private projectService: ProjectTemplateService) { }
}

@Component({
    templateUrl: './project-pages/accountMgr.component.html',
    styleUrls: ['./project-pages/project-pages.component.scss']
})
export class PrjAcctMgrComponent {
    private content: ProjectProperties = this.projectService.renderContent();
    public imgFolder: string = this.content.cover + this.content.folder + '/';

    constructor(private projectService: ProjectTemplateService) { }
}

@Component({
    templateUrl: './project-pages/medical.component.html',
    styleUrls: ['./project-pages/project-pages.component.scss']
})
export class PrjMedicalComponent {
    private content: ProjectProperties = this.projectService.renderContent();
    public imgFolder: string = this.content.cover + this.content.folder + '/';

    constructor(private projectService: ProjectTemplateService) { }
}

@Component({
    templateUrl: './project-pages/motive.component.html',
    styleUrls: ['./project-pages/project-pages.component.scss']
})
export class PrjMotiveComponent {
    private content: ProjectProperties = this.projectService.renderContent();
    public imgFolder: string = this.content.cover + this.content.folder + '/';

    constructor(private projectService: ProjectTemplateService) { }
}

@Component({
    templateUrl: './project-pages/recreogo.component.html',
    styleUrls: ['./project-pages/project-pages.component.scss']
})
export class PrjRecreogoComponent {
    private content: ProjectProperties = this.projectService.renderContent();
    public imgFolder: string = this.content.cover + this.content.folder + '/';

    constructor(private projectService: ProjectTemplateService) { }
}

@Component({
    templateUrl: './project-pages/designSystem.component.html',
    styleUrls: ['./project-pages/project-pages.component.scss']
})
export class PrjDesignSystemComponent {
    private content: ProjectProperties = this.projectService.renderContent();
    public imgFolder: string = this.content.cover + this.content.folder + '/';

    constructor(private projectService: ProjectTemplateService) { }
}

@Component({
    templateUrl: './project-pages/verishare.component.html',
    styleUrls: ['./project-pages/project-pages.component.scss']
})
export class PrjVeriShareComponent {
    private content: ProjectProperties = this.projectService.renderContent();
    public imgFolder: string = this.content.cover + this.content.folder + '/';

    constructor(private projectService: ProjectTemplateService) { }
}