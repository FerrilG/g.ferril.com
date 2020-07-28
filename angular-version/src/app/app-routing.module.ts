import { AboutMeComponent } from './core/components/about-me/about-me.component';
import { NavigationService } from './services/navigation.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router, ActivationEnd } from '@angular/router';
import { HomepageComponent } from './core/components/homepage/homepage.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomepageComponent,
    data: {
      sidePanel: false,
      sidePanelType: null,
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
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  providers: [NavigationService],
  exports: [RouterModule]
})

export class AppRoutingModule { }
