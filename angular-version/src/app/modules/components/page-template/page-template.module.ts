import { SectionConstructorComponent } from './../section-constructor/section-constructor.component';

import { SidepanelComponent } from './../../../core/sidepanel/sidepanel.component';
import { PageScrollerModule } from './../page-scroller/page-scroller.module';
import { AppRoutingModule } from './../../../app-routing.module';
import { PageTemplateComponent } from './page-template.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from 'src/app/core/components/homepage/homepage.component';
import { AboutMeComponent } from 'src/app/core/components/about-me/about-me.component';
import { ProjectsComponent } from 'src/app/core/components/projects/projects.component';


@NgModule({
    declarations: [
        PageTemplateComponent,
        SidepanelComponent,
        SectionConstructorComponent,
        HomepageComponent,
        ProjectsComponent,
        AboutMeComponent,
    ],
    imports: [
        AppRoutingModule,
        CommonModule,
        PageScrollerModule,
    ],
    exports: [
        PageTemplateComponent,
        SidepanelComponent,
        SectionConstructorComponent,
        HomepageComponent,
        ProjectsComponent,
        AboutMeComponent,
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class PageTemplateModule { }
