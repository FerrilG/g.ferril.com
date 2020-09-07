
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

export class PageTemplateComponent implements OnInit, OnDestroy {

  private routeChangeListener$: Subscription;
  public modalOpen: any = this.loginModal;
  public pageConfig: PageTemplate = new PageConfigDefault();

  constructor(
    private pageScrollService: PageScrollerService,
    private navigationService: NavigationService,
    private loginModal: LoginModalService) {
    this.routeChangeListener$ = this.navigationService.onRouteChange(() => {
      const pageBuild = this.navigationService.pageConstruction;
      this.pageConfig = pageBuild;
      if (pageBuild !== undefined) {
        this.loadPageScroller(pageBuild);
      }
      const pagePanel: HTMLElement = document.getElementById('mainContent');
      pagePanel.scrollTo({
        top: 0,
        behavior: 'auto',
      });
    });
  }

  ngOnInit(): void { }

  ngOnDestroy(): void {
    this.routeChangeListener$.unsubscribe();
  }

  private loadPageScroller(object: PageTemplate): void {
    switch (object.pageScroller) {
      case true:
        switch (object.firstPage) {
          case true:
            setTimeout(() => {
              this.pageScrollService.renderScrollList();
            }, 200);
            break;
          default:
            setTimeout(() => {
              this.pageScrollService.renderScrollList();
            }, 40);
            break;
        }
        break;
      default:
        break;
    }
  }

}

