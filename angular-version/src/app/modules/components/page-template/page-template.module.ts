import { SectionConstructorComponent } from './../section-constructor/section-constructor.component';

import { SidepanelComponent } from './../../../core/sidepanel/sidepanel.component';
import { PageScrollerModule } from './../page-scroller/page-scroller.module';
import { AppRoutingModule } from './../../../app-routing.module';
import { PageTemplateComponent } from './page-template.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
    declarations: [
    PageTemplateComponent,
    SidepanelComponent,
    SectionConstructorComponent
],
imports: [
    AppRoutingModule,
    CommonModule,
    PageScrollerModule,
],
exports: [
    PageTemplateComponent,
    SidepanelComponent,
    SectionConstructorComponent
    ],
})
export class PageTemplateModule { }
