import { NavigationService } from './services/navigation.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/pages/home/home.component';

import { SectionConstructorComponent } from './modules/components/section-constructor/section-constructor.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      sidePanel: false,
      sidePanelType: null,
    }
  },
  {
    path: 'work',
    component: SectionConstructorComponent,
    data: {
      sidePanel: true,
      sidePanelType: 'overview',
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
