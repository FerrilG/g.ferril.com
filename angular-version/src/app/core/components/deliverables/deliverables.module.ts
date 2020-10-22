import { RouterModule, Routes } from '@angular/router';
import { DeliverablesComponent } from './deliverables.component';
import { DeliverableTemplateService } from './../../services/deliverable-list.service';
import { NgModule } from "@angular/core";

const deliverableRoutes: Routes = [
    // {

    // }
];


@NgModule({
    declarations: [
        DeliverablesComponent
    ],
    imports: [
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
