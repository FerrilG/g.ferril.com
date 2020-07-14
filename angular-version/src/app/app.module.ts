import { HeaderModule } from './core/header/header.module';
import { PageScrollerModule } from './modules/components/page-scroller/page-scroller.module';
import { PageTemplateModule } from './modules/components/page-template/page-template.module';
import { FooterModule } from './core/footer/footer.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/pages/home/home.component';
import { SubHeaderComponent } from './core/sub-header/sub-header.component';
import { BreadcrumbComponent } from './modules/components/breadcrumb/breadcrumb.component';
import { CardModule } from './modules/components/card/card.module';
import { GDesignLibModule } from 'g-design-lib';
// import { SidepanelComponent } from './core/sidepanel/sidepanel.component';
// import { SectionConstructorComponent } from './modules/components/section-constructor/section-constructor.component';
// import { PageTemplateComponent } from './modules/components/page-template/page-template.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SubHeaderComponent,
    BreadcrumbComponent,
    // SidepanelComponent,
    // SectionConstructorComponent,
    // PageTemplateComponent,
  ],
  imports: [
    BrowserModule,
    GDesignLibModule,
    AppRoutingModule,
    HeaderModule,
    CardModule,
    FooterModule,
    PageTemplateModule,
    PageScrollerModule
  ],
  exports: [
  ],
  providers: [
 ],
  bootstrap: [AppComponent]
})
export class AppModule { }
