import { AuthGuard } from './../../../security/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
                canActivate: [AuthGuard],
                data: {
                    sidePanel: true,
                    sidePanelType: 'overview',
                    pageSectionScroller: false,
                }
            },
            {
                path: 'portfolio',
                component: PrjPortfolioComponent,
                canActivate: [AuthGuard],
                data: {
                    canNavigate: 'canAccessProjects',
                    accessDirectly: false,
                    sidePanel: true,
                    sidePanelType: 'overview',
                    pageSectionScroller: true,
                    breadcrumb: 'Portfolio'
                }
            },
            {
                path: 'myCompany',
                canActivate: [AuthGuard],
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
