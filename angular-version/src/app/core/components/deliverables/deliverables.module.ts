import { DelAnnotationsComponent } from './deliverable-pages/annotations/annotations.component';
import { DelUserFlowsComponent } from './deliverable-pages/user-flows/user-flows.component';
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
        component: DelUserFlowsComponent,
        canActivate: [AuthGuard],
        data: {
            pageTitle: 'User Flows | Geoff\u0027s Deliverables',
            gaPage: 'Deliverables/User-Flows',
            sidePanel: true,
            sidePanelType: 'overview',
            pageScroller: true,
            breadcrumb: 'User Flows',
        }
    },
    {
        path: 'annotations',
        component: DelAnnotationsComponent,
        canActivate: [AuthGuard],
        data: {
            pageTitle: 'Annotations | Geoff\u0027s Deliverables',
            gaPage: 'Deliverables/Annotations',
            sidePanel: true,
            sidePanelType: 'overview',
            pageScroller: true,
            breadcrumb: 'Annotations',
        }
    }
];


@NgModule({
    declarations: [
        DeliverablesComponent,
        DelSitemapsComponent,
        DelAnnotationsComponent,
        DelUserFlowsComponent,
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
