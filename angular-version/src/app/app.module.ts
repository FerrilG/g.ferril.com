import { FooterModule } from './core/footer/footer.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/pages/home/home.component';
import { HeaderComponent } from './core/header/header.component';
import { SubHeaderComponent } from './core/sub-header/sub-header.component';
import { BreadcrumbComponent } from './modules/components/breadcrumb/breadcrumb.component';
import { CardModule } from './modules/components/card/card.module';
import { GDesignLibModule } from 'g-design-lib';
import { SidepanelComponent } from './core/sidepanel/sidepanel.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SubHeaderComponent,
    BreadcrumbComponent,
    SidepanelComponent,
  ],
  imports: [
    BrowserModule,
    GDesignLibModule,
    AppRoutingModule,
    CardModule,
    FooterModule
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
