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
    },
    {
        path: 'accountMgr',
        component: PrjPortfolioComponent,
        canActivate: [AuthGuard],
        data: {
            sidePanel: true,
            sidePanelType: 'overview',
            pageScroller: true,
            breadcrumb: 'accountMgr',
            pageBlog: true,
        }
    },
    {
        path: 'medical',
        component: PrjPortfolioComponent,
        canActivate: [AuthGuard],
        data: {
            sidePanel: true,
            sidePanelType: 'overview',
            pageScroller: true,
            breadcrumb: 'medical',
            pageBlog: true,
        }
    },
    {
        path: 'motive',
        component: PrjPortfolioComponent,
        canActivate: [AuthGuard],
        data: {
            sidePanel: true,
            sidePanelType: 'overview',
            pageScroller: true,
            breadcrumb: 'motive',
            pageBlog: true,
        }
    },
    {
        path: 'recreogo',
        component: PrjPortfolioComponent,
        canActivate: [AuthGuard],
        data: {
            sidePanel: true,
            sidePanelType: 'overview',
            pageScroller: true,
            breadcrumb: 'recreogo',
            pageBlog: true,
        }
    },
    {
        path: 'designSystem',
        component: PrjPortfolioComponent,
        canActivate: [AuthGuard],
        data: {
            sidePanel: true,
            sidePanelType: 'overview',
            pageScroller: true,
            breadcrumb: 'designSystem',
            pageBlog: false,
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(projectRoutes)],
    providers: [],
    exports: [RouterModule]
})
export class ProjectsRoutingModule { }
