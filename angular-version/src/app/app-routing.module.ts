import { DeliverablesComponent } from './core/components/deliverables/deliverables.component';
import { BlogComponent } from './core/components/blog/blog.component';
import { LoginModalService } from './services/login-modal.service';
import { ProjectsComponent } from 'src/app/core/components/projects/project-pages/project-main/projects.component';
import { RedirectGuard } from './security/redirect.gaurd';
import { AboutMeComponent } from './core/components/about-me/about-me.component';
import { NavigationService } from './services/navigation.service';
import { NgModule, OnInit } from '@angular/core';
import { Routes, RouterModule, Router, ActivationEnd, ActivationStart, PreloadAllModules } from '@angular/router';
import { HomepageComponent } from './core/components/homepage/homepage.component';
import { PageTemplateComponent } from './modules/components/page-template/page-template.component';
import { ProjectWrapperComponent } from './core/components/projects/project-pages/project-wrapper/project-wrapper.component';

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
    path: 'blog',
    component: BlogComponent,
    data: {
      pageTitle: 'Blog',
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
    component: ProjectWrapperComponent,
    loadChildren: () => import('./core/components/projects/projects.module').then(m => m.ProjectsModule)
  },
  // Deliverables
  {
    path: 'deliverables',
    component: DeliverablesComponent,
    data: {
      pageTitle: 'Geoff\u0027s Projects',
      gaPage: 'Deliverables',
      sidePanel: true,
      sidePanelType: 'overview',
      pageScroller: false,
    }
  },
  // Deliverable Children
  {
    path: 'deliverables',
    loadChildren: () => import('./core/components/deliverables/deliverables.module').then(m => m.DeliverablesModule)
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
