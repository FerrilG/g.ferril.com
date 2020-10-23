import { Component } from '@angular/core';
import { ProjectProperties } from 'src/app/config/types/projects.config';
import { ProjectTemplateService } from 'src/app/core/services/projects.service';

@Component({
    templateUrl: './project-pages/html-files/portfolio.component.html',
    styleUrls: ['./project-pages/html-files/project-pages.component.scss']
})
export class PrjPortfolioComponent {
    public readonly content: ProjectProperties = this.projectService.renderContent();
    public readonly imgFolder: string = this.content.cover + this.content.folder + '/';

    constructor(private projectService: ProjectTemplateService) { }
}

@Component({
    templateUrl: './project-pages/html-files/myCompany.component.html',
    styleUrls: ['./project-pages/html-files/project-pages.component.scss']
})
export class PrjmyCompanyComponent {
    public readonly content: ProjectProperties = this.projectService.renderContent();
    public readonly imgFolder: string = this.content.cover + this.content.folder + '/';

    constructor(private projectService: ProjectTemplateService) { }
}

@Component({
    templateUrl: './project-pages/html-files/accountMgr.component.html',
    styleUrls: ['./project-pages/html-files/project-pages.component.scss']
})
export class PrjAcctMgrComponent {
    public readonly content: ProjectProperties = this.projectService.renderContent();
    public readonly imgFolder: string = this.content.cover + this.content.folder + '/';

    constructor(private projectService: ProjectTemplateService) { }
}

@Component({
    templateUrl: './project-pages/html-files/medical.component.html',
    styleUrls: ['./project-pages/html-files/project-pages.component.scss']
})
export class PrjMedicalComponent {
    public readonly content: ProjectProperties = this.projectService.renderContent();
    public readonly imgFolder: string = this.content.cover + this.content.folder + '/';

    constructor(private projectService: ProjectTemplateService) { }
}

@Component({
    templateUrl: './project-pages/html-files/motive.component.html',
    styleUrls: ['./project-pages/html-files/project-pages.component.scss']
})
export class PrjMotiveComponent {
    public readonly content: ProjectProperties = this.projectService.renderContent();
    public readonly imgFolder: string = this.content.cover + this.content.folder + '/';

    constructor(private projectService: ProjectTemplateService) { }
}

@Component({
    templateUrl: './project-pages/html-files/recreogo.component.html',
    styleUrls: ['./project-pages/html-files/project-pages.component.scss']
})
export class PrjRecreogoComponent {
    public readonly content: ProjectProperties = this.projectService.renderContent();
    public readonly imgFolder: string = this.content.cover + this.content.folder + '/';

    constructor(private projectService: ProjectTemplateService) { }
}

@Component({
    templateUrl: './project-pages/html-files/designSystem.component.html',
    styleUrls: ['./project-pages/html-files/project-pages.component.scss']
})
export class PrjDesignSystemComponent {
    public readonly content: ProjectProperties = this.projectService.renderContent();
    public readonly imgFolder: string = this.content.cover + this.content.folder + '/';

    constructor(private projectService: ProjectTemplateService) { }
}

@Component({
    templateUrl: './project-pages/html-files/verishare.component.html',
    styleUrls: ['./project-pages/html-files/project-pages.component.scss']
})
export class PrjVeriShareComponent {
    public readonly content: ProjectProperties = this.projectService.renderContent();
    public readonly imgFolder: string = this.content.cover + this.content.folder + '/';

    constructor(private projectService: ProjectTemplateService) { }
}
