import { PageConfigDefault } from './../../../config/pageTemplate';
import { LoginModalService } from './../../../services/login-modal.service';
import { Component, OnInit, Inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { NavigationService } from 'src/app/services/navigation.service';
import { DOCUMENT } from '@angular/common';
import { PageTemplate } from 'src/app/config/pageTemplate';

@Component({
  selector: 'g-page-template',
  templateUrl: './page-template.component.html',
  styleUrls: ['./page-template.component.scss']
})

export class PageTemplateComponent implements OnInit {

  private routeChangeListener$: Subscription;
  public modalOpen: any = this.loginModal;
  public pageConfig: PageTemplate = new PageConfigDefault();

  constructor(
    private navigationService: NavigationService,
    private loginModal: LoginModalService  ) {
  }
  
  ngOnInit(): void {
    this.routeChangeListener$ = this.navigationService.onRouteChange(() => {
      if (this.navigationService.pageConstruction !== undefined) {
        this.pageConfig = this.navigationService.pageConstruction;
      }
      const pagePanel: HTMLElement = document.getElementById('mainContent');
      pagePanel.scrollTo({
        top: 0,
        behavior: 'auto',
      });
    });
  }

  ngOnDestroy(): void {
    this.routeChangeListener$.unsubscribe();
  }

}

