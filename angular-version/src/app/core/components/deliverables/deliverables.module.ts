import { AuthGuard } from 'src/app/security/auth.guard';
import { DelSitemapsComponent } from './deliverable-pages/sitemaps/sitemaps.component';
import { RouterModule, Routes } from '@angular/router';
import { DeliverablesComponent } from './deliverables.component';
import { DeliverableTemplateService } from './../../services/deliverable-list.service';
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

const deliverableRoutes: Routes = [
    {
        path: 'sitemaps',
        component: DelSitemapsComponent,
        canActivate: [AuthGuard],
        data: {
            pageTitle: 'Sitemaps | Geoff\u0027s Deliverables',
            gaPage: 'Deliverables/Sitemaps',
            sidePanel: true,
            sidePanelType: 'overview',
            pageScroller: true,
            breadcrumb: 'Sitemaps',
        }
    },
    {
        path: 'user-flows',
        component: DelSitemapsComponent,
        canActivate: [AuthGuard],
        data: {
            pageTitle: 'User Flows | Geoff\u0027s Deliverables',
            gaPage: 'Deliverables/User-Flows',
            sidePanel: true,
            sidePanelType: 'overview',
            pageScroller: true,
            breadcrumb: 'User Flows',
        }
    }
];


@NgModule({
    declarations: [
        DeliverablesComponent,
        DelSitemapsComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(deliverableRoutes),
    ],
    providers: [
        DeliverableTemplateService
    ],
    exports: [
        RouterModule,
    ]
})
export class DeliverablesModule { }
