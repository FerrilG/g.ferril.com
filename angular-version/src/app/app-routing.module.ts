import { LoginModalService } from './services/login-modal.service';
import { ProjectsComponent } from './core/components/projects/projects.component';
import { RedirectGuard } from './security/redirect.gaurd';
import { LoginComponent } from './modules/components/login/login.component';
import { AboutMeComponent } from './core/components/about-me/about-me.component';
import { NavigationService } from './services/navigation.service';
import { NgModule, OnInit } from '@angular/core';
import { Routes, RouterModule, Router, ActivationEnd, ActivationStart, PreloadAllModules } from '@angular/router';
import { HomepageComponent } from './core/components/homepage/homepage.component';
import { PageTemplateComponent } from './modules/components/page-template/page-template.component';

const appRoutes: Routes = [
  {
    path: 'home',
    pathMatch: 'full',
    component: HomepageComponent,
    data: {
      pageTitle: 'Geoffrey\u0027s Portfolio',
      gaPage: 'Home',
      sidePanel: false,
      sidePanelType: null,
      pageScroller: false,
    }
  },
  // {
  //   path: 'login',
  //   component: LoginComponent,
  //   data: {
  //     sidePanel: true,
  //     sidePanelType: 'overview',
  //     pageScroller: false,
  //   }
  // },
  {
    path: 'about-me',
    component: AboutMeComponent,
    data: {
      pageTitle: 'About Geoff',
      gaPage: 'About Me',
      sidePanel: true,
      sidePanelType: 'overview',
      pageScroller: true,
      pageBlog: true,
    }
  },
  {
    path: 'projects',
    component: ProjectsComponent,
    data: {
      pageTitle: 'Geoff\u0027s Projects',
      gaPage: 'Projects',
      sidePanel: true,
      sidePanelType: 'overview',
      pageScroller: false,
    }
  },
  // Project Children
  {
    path: 'projects',
    loadChildren: () => import('./core/components/projects/projects.module').then(m => m.ProjectsModule)
  },

  // {
  //   path: '**',
  //   canActivate: [RedirectGuard],
  //   component: RedirectGuard,
  //   data: {
  //     externalUrl: ''
  //   }
  // }
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(
    appRoutes, {
    preloadingStrategy: PreloadAllModules
  })],
  providers: [],
  exports: [RouterModule]
})

export class AppRoutingModule { }
