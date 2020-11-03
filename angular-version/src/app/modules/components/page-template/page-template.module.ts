import { DeliverablesModule } from 'src/app/core/components/deliverables/deliverables.module';
import { PageScrollerComponent } from './../page-scroller/page-scroller.component';
import { FormsModule } from '@angular/forms';
import { SecurityService } from './../../../security/security.service';
import { UnlockModalComponent } from './../unlock-modal/unlock-modal.component';
import { ProjectsModule } from 'src/app/core/components/projects/projects.module';
import { SectionConstructorComponent } from './../_section-constructor/section-constructor.component';

import { SidePanelComponent } from './../../../core/sidepanel/sidepanel.component';
import { AppRoutingModule } from './../../../app-routing.module';
import { PageTemplateComponent } from './page-template.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from 'src/app/core/components/homepage/homepage.component';
import { AboutMeComponent } from 'src/app/core/components/about-me/about-me.component';
import { ProjectTemplateService } from 'src/app/core/services/projects.service';


@NgModule({
    declarations: [
        PageTemplateComponent,
        SidePanelComponent,
        SectionConstructorComponent,
        HomepageComponent,
        AboutMeComponent,
        UnlockModalComponent,
        PageScrollerComponent,
    ],
    imports: [
        AppRoutingModule,
        CommonModule,
        ProjectsModule,
        DeliverablesModule,
        FormsModule
    ],
    // providers: [ProjectService],
    exports: [
        PageTemplateComponent,
        SidePanelComponent,
        SectionConstructorComponent,
        HomepageComponent,
        AboutMeComponent,
        PageScrollerComponent,
    ],
    // schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PageTemplateModule { }
