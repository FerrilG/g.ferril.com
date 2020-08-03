import { ProjectsComponent } from './core/components/projects/projects.component';
import { RedirectGuard } from './security/redirect.gaurd';
import { LoginComponent } from './modules/components/login/login.component';
import { AboutMeComponent } from './core/components/about-me/about-me.component';
import { NavigationService } from './services/navigation.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router, ActivationEnd, ActivationStart, PreloadAllModules } from '@angular/router';
import { HomepageComponent } from './core/components/homepage/homepage.component';

const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomepageComponent,
    data: {
      sidePanel: false,
      sidePanelType: null,
      pageSectionScroller: false,
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      sidePanel: true,
      sidePanelType: 'overview',
      pageSectionScroller: false,
    }
  },
  {
    path: 'about-me',
    component: AboutMeComponent,
    data: {
      sidePanel: true,
      sidePanelType: 'overview',
      pageSectionScroller: true,
    }
  },
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
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(
    appRoutes, {
    preloadingStrategy: PreloadAllModules
  })],
  providers: [NavigationService],
  exports: [RouterModule]
})

export class AppRoutingModule { }
