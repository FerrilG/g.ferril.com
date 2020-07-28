import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router, ActivationEnd, RouterOutlet } from '@angular/router';
import { ProjectsComponent } from './projects.component';
import { PrjmyCompanyComponent } from './project-pages/myCompany/myCompany.component';
import { PrjPortfolioComponent } from './project-pages/portfolio/portfolio.component';
import { NavigationService } from 'src/app/services/navigation.service';

const projectRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: ProjectsComponent,
                data: {
                    sidePanel: true,
                    sidePanelType: 'overview',
                    pageSectionScroller: false,
                }
            },
            {
                path: 'portfolio',
                component: PrjPortfolioComponent,
                data: {
                    sidePanel: true,
                    sidePanelType: 'overview',
                    pageSectionScroller: true,
                    breadcrumb: 'Portfolio'
                }
            },
            {
                path: 'myCompany',
                component: PrjmyCompanyComponent,
                data: {
                    sidePanel: true,
                    sidePanelType: 'overview',
                    pageSectionScroller: true,
                    breadcrumb: 'myCompany'
                }
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(projectRoutes)],
    providers: [NavigationService],
    exports: [RouterModule]
})
export class ProjectsRoutingModule { }
