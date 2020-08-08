import { PageScrollerComponent } from './../page-scroller/page-scroller.component';
import { SidepanelComponent } from './../../../core/sidepanel/sidepanel.component';
import { SecurityService } from './../../../security/security.service';
import { PageScrollerService, SectionInfo } from './../page-scroller/page-scroller.service';
import { Router, NavigationEnd, ActivatedRoute, ActivationEnd, ActivationStart } from '@angular/router';
import { Component, OnInit, AfterContentInit, AfterViewInit, Inject, OnChanges, DoCheck, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { NavigationService } from 'src/app/services/navigation.service';
import { DOCUMENT } from '@angular/common';
import { UserAccessAuth } from 'src/app/security/app-user-auth';


@Component({
  selector: 'g-page-template',
  templateUrl: './page-template.component.html',
  styleUrls: ['./page-template.component.scss']
})
export class PageTemplateComponent implements OnInit {

  private routeChangeListener$: Subscription;
  private pageConfig: object = null;
  private sidePanel = false;
  private pageBlog = false;
  private pageSectionScroller = false;
  private securityObject: UserAccessAuth = null;

  constructor(
    private navigationService: NavigationService,
    private route: ActivatedRoute,
    private router: Router,
    private securityService: SecurityService,
    @Inject(DOCUMENT) private document: any
  ) {
  }

  ngOnInit(): void {
    this.routeChangeListener$ = this.navigationService
      .onRouteChange((data: any, path: string) => {
        if (Object.keys(data).length !== 0) {
          // this.securityObject = this.navigationService.securityObject;
          this.sidePanel = data.sidePanel;
          this.pageSectionScroller = data.pageSectionScroller;
          this.pageBlog = data.pageBlog;
          if (this.pageSectionScroller) {
          }
          const pagePanel: HTMLElement = document.getElementById('mainContent');
          pagePanel.scrollTo({
            top: 0,
            behavior: 'auto',
          });
        }
      });
  }

  ngOnDestroy(): void {
    this.routeChangeListener$.unsubscribe();
  }

  hideSidePanel(): boolean {
    return this.sidePanel;
  }

  hideSectionScroller(): boolean {
    return this.pageSectionScroller;
  }

  pageStart(): boolean {
    return this.pageBlog;
  }
}

