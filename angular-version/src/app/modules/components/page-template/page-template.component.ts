
import { PageConfigDefault } from './../../../config/pageTemplate';
import { LoginModalService } from './../../../services/login-modal.service';
import { Component, OnInit, OnDestroy, AfterContentInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NavigationService } from 'src/app/services/navigation.service';
import { PageTemplate } from 'src/app/config/pageTemplate';
import { PageScrollerService } from 'src/app/services/page-scroller.service';

@Component({
  selector: 'g-page-template',
  templateUrl: './page-template.component.html',
  styleUrls: ['./page-template.component.scss']
})

export class PageTemplateComponent implements OnInit, AfterContentInit, OnDestroy {

  private routeChangeListener$: Subscription;
  public modalOpen: any = this.loginModal;
  public pageConfig: PageTemplate = new PageConfigDefault();

  constructor(
    private pageScrollService: PageScrollerService,
    private navigationService: NavigationService,
    private loginModal: LoginModalService) {
    this.routeChangeListener$ = this.navigationService.onRouteChange(() => {
      this.pageConfig = this.navigationService.pageConstruction;
      if (this.pageConfig !== undefined) {
        if (this.pageConfig.pageScroller !== false) {
          setTimeout(() => {
            this.pageScrollService.renderScrollList();
          }, 40);
        }
      }
      const pagePanel: HTMLElement = document.getElementById('mainContent');
      pagePanel.scrollTo({
        top: 0,
        behavior: 'auto',
      });
    });
  }

  ngOnInit(): void {

  }

  ngAfterContentInit(): void {

  }

  ngOnDestroy(): void {
    this.routeChangeListener$.unsubscribe();
  }

}

