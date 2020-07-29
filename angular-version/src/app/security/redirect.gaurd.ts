import { NavigationService } from 'src/app/services/navigation.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { SecurityService } from './security.service';

@Injectable({
  providedIn: 'root'
})

export class RedirectGuard implements CanActivate {

  constructor(private securityService: SecurityService, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean {
    window.location.href = '';
    return true;
    // const canNavigate: string = next.data.canNavigate;
    // return this.securityService.securityObject.isAuthenticated && this.securityService.securityObject[canNavigate];
  }
}
