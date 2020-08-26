import { AuthGuard } from './../../../security/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent } from './projects.component';
import { PrjmyCompanyComponent } from './project-pages/myCompany/myCompany.component';
import { PrjPortfolioComponent } from './project-pages/portfolio/portfolio.component';

const projectRoutes: Routes = [
    {
        path: '',
        component: ProjectsComponent,
        data: {
            sidePanel: true,
            sidePanelType: 'overview',
            pageScroller: false,
        }
    },
    {
        path: 'portfolio',
        component: PrjPortfolioComponent,
        canActivate: [AuthGuard],
        data: {
            sidePanel: true,
            sidePanelType: 'overview',
            pageScroller: true,
            breadcrumb: 'Portfolio'
        }
    },
    {
        path: 'myCompany',
        component: PrjPortfolioComponent,
        canActivate: [AuthGuard],
        data: {
            sidePanel: true,
            sidePanelType: 'overview',
            pageScroller: true,
            breadcrumb: 'myCompany',
            pageBlog: true,
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(projectRoutes)],
    providers: [],
    exports: [RouterModule]
})
export class ProjectsRoutingModule { }
