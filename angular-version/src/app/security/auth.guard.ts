import { DeliverableTemplateService } from './../core/services/deliverable-list.service';
import { NavigationService } from 'src/app/services/navigation.service';
import { ProjectTemplateService } from './../core/services/projects.service';
import { SecurityService } from './security.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { LoginModalService } from '../services/login-modal.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private securityService: SecurityService,
    private router: Router,
    private readonly loginModal: LoginModalService,
    private projectService: ProjectTemplateService,
    private deliverableService: DeliverableTemplateService,
    private navService: NavigationService
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const isAuthenticated: boolean = this.securityService.securityObject.isAuthenticated;
    let pathLocked: boolean;
    let dir: string;
    switch (state.url.slice(1, state.url.lastIndexOf('/')).toLowerCase()) {
      case 'projects': {
        dir = 'projects';
        pathLocked = this.projectService.projectData.find(item => item.folder === next.url[0].path).lock;
        break;
      }
      case 'deliverables': {
        dir = 'deliverables';
        pathLocked = this.deliverableService.deliverableData.find(item => item.folder === next.url[0].path).lock;
        break;
      }
    }

    switch (this.navService.isFirstPage()) {
      case true: {
        if (pathLocked) {
          this.router.navigate([dir]);
        } else {
          return true;
        }
        break;
      }
      case false: {
        switch (pathLocked) {
          case true: {
            if (isAuthenticated) {
              return true;
            } else {
              this.loginModal.unlockSite(state.url);
              return false;
            }
            break;
          }
          case false: {
            return true;
          }
        }
      }
    }
  }
}
