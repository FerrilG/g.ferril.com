import { NavigationService } from 'src/app/services/navigation.service';
import { LoginModalService } from './services/login-modal.service';
import { SecurityService } from 'src/app/security/security.service';
import { HeaderModule } from './core/header/header.module';
import { PageScrollerModule } from './modules/components/page-scroller/page-scroller.module';
import { PageTemplateModule } from './modules/components/page-template/page-template.module';
import { FooterModule } from './core/footer/footer.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/pages/home/home.component';
import { SubHeaderComponent } from './core/sub-header/sub-header.component';
import { BreadcrumbComponent } from './modules/components/breadcrumb/breadcrumb.component';
import { CardModule } from './modules/components/card/card.module';

// import { GDesignLibModule } from 'g-design-lib';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SubHeaderComponent,
    BreadcrumbComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    CardModule,
    FooterModule,
    PageTemplateModule,
    PageScrollerModule,
    HttpClientModule,
  ],
  exports: [
  ],
  providers: [
    SecurityService,
    LoginModalService,
    NavigationService,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
