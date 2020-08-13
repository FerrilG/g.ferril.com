import { LoginModalService } from './../../../services/login-modal.service';
import { SecurityService } from './../../../security/security.service';
import { UserAccess } from './../../../security/app-user';
import { Component, OnInit, Input, HostListener } from '@angular/core';

@Component({
  selector: 'g-login-modal',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public user: UserAccess = new UserAccess();

  constructor(private securityService: SecurityService, private loginModal: LoginModalService) { }

  ngOnInit() {
    document.getElementById('userName').focus();
  }

  public login() {
    this.securityService.login(this.user)
      .subscribe(resp => {
        this.securityService.securityObject = resp;
      });
    this.closeModal();
  }

  public closeModal(): void {
    this.loginModal.closeModal();
  }

  @HostListener('document:keyup', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    switch (event.keyCode) {
      case 27:
        this.closeModal();
        break;
      default:
    }
  }
}
