import { SecurityService } from './../../../security/security.service';
import { UserAccessAuth } from './../../../security/app-user-auth';
import { UserAccess } from './../../../security/app-user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'g-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private user: UserAccess = new UserAccess();
  private securityObject: UserAccessAuth = null;

  constructor(private securityService: SecurityService) { }

  ngOnInit() { }

  public login() {
    this.securityService.login(this.user)
      .subscribe(resp => {
        this.securityObject = resp;
      });
  }

  public logOut(): void {
    this.securityService.logout();
  }
}
