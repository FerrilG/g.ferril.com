import {
    PrjAcctMgrComponent,
    PrjPortfolioComponent,
    PrjmyCompanyComponent,
    PrjMedicalComponent,
    PrjMotiveComponent,
    PrjRecreogoComponent,
    PrjDesignSystemComponent,
    PrjVeriShareComponent,
} from './page-binding.component';
import { AuthGuard } from './../../../security/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const projectRoutes: Routes = [
    {
        path: 'portfolio',
        component: PrjPortfolioComponent,
        // outlet: 'project-wrapper',
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
        component: PrjAcctMgrComponent,
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
        component: PrjMedicalComponent,
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
        component: PrjMotiveComponent,
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
        component: PrjRecreogoComponent,
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
        component: PrjDesignSystemComponent,
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
    },
    {
        path: 'VeriShare',
        component: PrjVeriShareComponent,
        canActivate: [AuthGuard],
        data: {
            // pageTitle: 'Custom Design System | Geoff\u0027s Projects',
            // gaPage: 'Projects - Design System | cx Loyalty',
            sidePanel: true,
            sidePanelType: 'overview',
            pageScroller: true,
            breadcrumb: 'VeriShare',
            pageBlog: false,
        }
    }
];

@NgModule({
    declarations: [
        PrjAcctMgrComponent,
        PrjPortfolioComponent,
        PrjmyCompanyComponent,
        PrjMedicalComponent,
        PrjMotiveComponent,
        PrjRecreogoComponent,
        PrjDesignSystemComponent,
        PrjVeriShareComponent,
    ],
    imports: [RouterModule.forChild(projectRoutes)],
    providers: [],
    exports: [
        RouterModule,
        PrjAcctMgrComponent,
        PrjPortfolioComponent,
        PrjmyCompanyComponent,
        PrjMedicalComponent,
        PrjMotiveComponent,
        PrjRecreogoComponent,
        PrjDesignSystemComponent,
        PrjVeriShareComponent,
    ]
})
export class ProjectsRoutingModule { }
