import { UserAccessAuth } from './app-user-auth';
import { Observable, of } from 'rxjs';
import { UserAccess } from './app-user';
import { LOGIN_MOCKS } from './login-mocks';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {
  public securityObject: UserAccessAuth = new UserAccessAuth();
  constructor() { }

  public resetSecurityObject(): void {
    this.securityObject.userName = null;
    this.securityObject.bearerToken = null;
    this.securityObject.isAuthenticated = false;
    this.securityObject.canAccessProjects = false;
    localStorage.removeItem('bearerToken');
  }

  public login(entity: UserAccess): Observable<UserAccessAuth> {
    this.resetSecurityObject();
    Object.assign(this.securityObject, LOGIN_MOCKS.find(
      user => user.userName.toLowerCase() === entity.userName.toLowerCase()));

    if (this.securityObject.userName !== null) {
      localStorage.setItem('bearerToken', this.securityObject.bearerToken);
    }
    return of<UserAccessAuth>(this.securityObject);
  }

  public logout(): void {
    this.resetSecurityObject();
  }
}
