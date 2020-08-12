import { LoginModalService } from './../../../services/login-modal.service';
import { SecurityService } from './../../../security/security.service';
import { UserAccessAuth } from './../../../security/app-user-auth';
import { UserAccess } from './../../../security/app-user';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'g-login-modal',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private user: UserAccess = new UserAccess();

  constructor(private securityService: SecurityService, private loginModal: LoginModalService) { }

  ngOnInit() { }

  public login() {
    this.securityService.login(this.user)
      .subscribe(resp => {
        this.securityService.securityObject = resp;
      });
    this.closeModal();
  }

  private closeModal(): void {
    this.loginModal.closeModal();
  }
}
