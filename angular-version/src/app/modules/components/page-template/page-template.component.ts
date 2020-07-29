import { SecurityService } from './../../../security/security.service';
import { PageScrollerService, SectionInfo } from './../page-scroller/page-scroller.service';
import { Router, NavigationEnd, ActivatedRoute, ActivationEnd, ActivationStart } from '@angular/router';
import { Component, OnInit, AfterContentInit, AfterViewInit, Inject } from '@angular/core';
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
  private sidePanel = false;
  private pageSectionScroller = false;
  private securityObject: UserAccessAuth = null;

  constructor(
    public navigationService: NavigationService,
    private route: ActivatedRoute,
    private router: Router,
    private securityService: SecurityService,
    @Inject(DOCUMENT) private document: any
  ) {
  }

  ngOnInit(): void {
    this.routeChangeListener$ = this.navigationService
      .onRouteChange((data: any, path: string) => {
        if (data.sidePanel != null) {
          this.sidePanel = data.sidePanel;
          this.pageSectionScroller = data.pageSectionScroller;
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

}

