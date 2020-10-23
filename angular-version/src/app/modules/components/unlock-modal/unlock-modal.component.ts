import { NavigationService } from 'src/app/services/navigation.service';
import { LoginModalService } from '../../../services/login-modal.service';
import { SecurityService } from '../../../security/security.service';
import { UserAccess } from '../../../security/app-user';
import { Component, OnInit, Input, HostListener } from '@angular/core';

@Component({
  selector: 'g-unlock-modal',
  templateUrl: './unlock-modal.component.html',
  styleUrls: ['./unlock-modal.component.scss']
})
export class UnlockModalComponent implements OnInit {

  public user: UserAccess = new UserAccess();
  public securityObject = this.securityService.securityObject;

  constructor(
    private securityService: SecurityService,
    private navService: NavigationService,
    private loginModal: LoginModalService,
  ) { }

  ngOnInit() {
    document.getElementById('userName').focus();
  }

  public login() {
    this.securityService.login(this.user)
      .subscribe(resp => {
        this.securityService.securityObject = resp;
      });
    if (this.securityObject.isAuthenticated === true) {
      this.navService.navigatePathTo(this.loginModal.navPath);
    } else {
      // alert('failed');
    }
    // this.loginModal.closeModal();
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
