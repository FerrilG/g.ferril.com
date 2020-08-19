import { ProjectService } from './../core/services/projects.service';
import { SecurityService } from './security.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private securityService: SecurityService, private router: Router, private projectService: ProjectService) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const isAuthenticated: boolean = this.securityService.securityObject.isAuthenticated;
    const getProjectLock: boolean = this.projectService.projectData.find(item => item.folder === next.url[0].path)['lock'];

    if (!getProjectLock) {
      return true;
    } else if (isAuthenticated) {
      return true;
    } else {
      return false;
    }
  }
}
