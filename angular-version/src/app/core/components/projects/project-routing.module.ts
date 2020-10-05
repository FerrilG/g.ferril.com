import { PrjPortfolioComponent } from './project-pages/portfolio/portfolio.component';
import { AuthGuard } from './../../../security/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent } from './projects.component';
import { PrjmyCompanyComponent } from './project-pages/myCompany/myCompany.component';
import { PrjTemplateComponent } from './project-pages/prj-template/prj-template.component';

const projectRoutes: Routes = [
    // {
    //     path: '',
    //     component: ProjectsComponent,
    //     data: {
    //         pageTitle: 'Geoff\u0027s Projects',
    //         sidePanel: true,
    //         sidePanelType: 'overview',
    //         pageScroller: false,
    //     }
    // },
    {
        path: 'portfolio',
        component: PrjPortfolioComponent,
        canActivate: [AuthGuard],
        data: {
            pageTitle: 'Design Portfolio | Geoff\u0027s Projects',
            gaPage: 'Project - Portfolio',
            sidePanel: true,
            sidePanelType: 'overview',
            pageScroller: true,
            breadcrumb: 'Portfolio'
        }
    },
    {
        path: 'myCompany',
        component: PrjmyCompanyComponent,
        canActivate: [AuthGuard],
        data: {
            pageTitle: 'eCommerce Rewards | Geoff\u0027s Projects',
            gaPage: 'Projects - MyCompany',
            sidePanel: true,
            sidePanelType: 'overview',
            pageScroller: true,
            breadcrumb: 'myCompany',
            pageBlog: true,
        }
    },
    {
        path: 'accountMgr',
        component: PrjTemplateComponent,
        canActivate: [AuthGuard],
        data: {
            pageTitle: 'eCommerce Account Manager | Geoff\u0027s Projects',
            gaPage: 'Projects - AccountMgr | Wells',
            sidePanel: true,
            sidePanelType: 'overview',
            pageScroller: true,
            breadcrumb: 'accountMgr',
            pageBlog: true,
        }
    },
    {
        path: 'medical',
        component: PrjTemplateComponent,
        canActivate: [AuthGuard],
        data: {
            pageTitle: 'Handheld Medical Records | Geoff\u0027s Projects',
            gaPage: 'Projects - Medical',
            sidePanel: true,
            sidePanelType: 'overview',
            pageScroller: true,
            breadcrumb: 'medical',
            pageBlog: true,
        }
    },
    {
        path: 'motive',
        component: PrjTemplateComponent,
        canActivate: [AuthGuard],
        data: {
            pageTitle: 'Mobile In-Flight Incentives | Geoff\u0027s Projects',
            gaPage: 'Projects - MotivEngine',
            sidePanel: true,
            sidePanelType: 'overview',
            pageScroller: true,
            breadcrumb: 'motive',
            pageBlog: true,
        }
    },
    {
        path: 'recreogo',
        component: PrjTemplateComponent,
        canActivate: [AuthGuard],
        data: {
            pageTitle: 'Sales Inventory Management | Geoff\u0027s Projects',
            gaPage: 'Projects - Recreogo',
            sidePanel: true,
            sidePanelType: 'overview',
            pageScroller: true,
            breadcrumb: 'recreogo',
            pageBlog: true,
        }
    },
    {
        path: 'designSystem',
        component: PrjTemplateComponent,
        canActivate: [AuthGuard],
        data: {
            pageTitle: 'Custom Design System | Geoff\u0027s Projects',
            gaPage: 'Projects - Design System | cx Loyalty',
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
