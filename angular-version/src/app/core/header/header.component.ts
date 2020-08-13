import { SecurityService } from './../../security/security.service';
import { headerLinks } from './../mocks/navigation-links.mock';
import { NavigationService } from './../../services/navigation.service';
import { Component, OnInit, AfterViewInit, ContentChildren, forwardRef, QueryList, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserAccessAuth } from 'src/app/security/app-user-auth';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit, AfterViewInit, OnDestroy {

  public currentRoute: string;
  public headerNavTabs = headerLinks;

  public headerTabsLoaded = false;
  private routeChangeListener$: Subscription;
  private headerTabWatcher$: Subscription;
  public headerMainTab: object;
  private securityObject: UserAccessAuth = null;

  constructor(private navigationService: NavigationService, private securityService: SecurityService) { }

  ngOnInit(): void {
    // this.securityObject = this.securityService.securityObject;
    // this.routeChangeListener$ = this.navigationService
    // .onRouteChange((data: any, path: string) => {
    //   this.currentRoute = path;
    // });
  }

  ngAfterViewInit(): void {
    this.headerTabsLoaded = true;
    this.headerMainTab = this.headerNavTabs.find(i => i.Main);
  }

  ngOnDestroy(): void {
    this.routeChangeListener$.unsubscribe();
    this.headerTabWatcher$.unsubscribe();
  }

  contactCard(): void {
    // this.classApplied = !this.classApplied;
  }

  public toggleSidePanel(): void {
    // const panelState = this.navigationService.pageConstruction.sidePanel
    // if (panelState) {
    //   this.navigationService.pageConstruction.sidePanel = false;
    //   // alert(panelState);
    // } else if (!panelState) {
    //   this.navigationService.pageConstruction.sidePanel = true;
    // }
  }
}
