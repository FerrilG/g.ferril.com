import { AboutMeComponent } from './core/components/about-me/about-me.component';
import { NavigationService } from './services/navigation.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/pages/home/home.component';

import { SectionConstructorComponent } from './modules/components/section-constructor/section-constructor.component';
import { HomepageComponent } from './core/components/homepage/homepage.component';
import { ProjectsComponent } from './core/components/projects/projects.component';

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
    path: 'projects',
    component: ProjectsComponent,
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
  }
  // {
  //   path: '',
  //   component: HomeComponent,
  //   outlet: 'page',
  //   data: {
  //     breadcrumb: 'Homepage'
  //   }
  // },
  // {
  //   path: 'work',
  //   outlet: 'page',
  //   loadChildren: () => import('./modules/pages/projects/projects.module').then(m => m.ProjectsModule),
  //   data: {
  //     breadcrumb: 'Projects'
  //   }
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  providers: [
    NavigationService
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
