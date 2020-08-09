import { ProjectCardComponent } from './../../../modules/components/project-card/project-card.component';
// import { CardModule } from './../../components/card/card.module';
// import { CardComponent } from './../../components/card/card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsRoutingModule } from './project-routing.module';
import { PrjPortfolioComponent } from './project-pages/portfolio/portfolio.component';
import { PrjmyCompanyComponent } from './project-pages/myCompany/myCompany.component';
import { ProjectsComponent } from './projects.component';
import { SecurityService } from 'src/app/security/security.service';

@NgModule({
    declarations: [
        ProjectsComponent,
        PrjPortfolioComponent,
        PrjmyCompanyComponent,
        ProjectCardComponent
    ],
    imports: [
        CommonModule,
        ProjectsRoutingModule
    ],
    providers: [
        SecurityService
    ],
    exports: [
        ProjectsRoutingModule,
        ProjectsComponent,
        PrjPortfolioComponent,
        PrjmyCompanyComponent
    ]
})
export class ProjectsModule { }
