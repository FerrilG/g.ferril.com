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
    this.securityObject.isAuthenticated = false;
  }

  public login(entity: UserAccess): Observable<UserAccessAuth> {
    this.resetSecurityObject();
    this.securityObject = Object.assign(this.securityObject, LOGIN_MOCKS.find(
      user => user.userName.toLowerCase() === entity.userName.toLowerCase()));
    return of<UserAccessAuth>(this.securityObject);
  }

  public logout(): void {
    this.resetSecurityObject();
  }
}
