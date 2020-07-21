import { headerLinks } from './../mocks/navigation-links.mock';
// import { HeaderTabComponent } from './header-tab.component';
import { NavigationService } from './../../services/navigation.service';
import { Component, OnInit, AfterViewInit, ContentChildren, forwardRef, QueryList, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit, AfterViewInit, OnDestroy {

  // classApplied = true;
  public currentRoute: string;


  // @ContentChildren(forwardRef(() => headerLinks))
  public headerNavTabs = headerLinks;

  public headerTabsLoaded = false;
  private routeChangeListener$: Subscription;
  private headerTabWatcher$: Subscription;
  public headerMainTab: object;

  constructor(private navigationService: NavigationService) {
  }

  ngOnInit(): void {
    this.routeChangeListener$ = this.navigationService
    .onRouteChange((data: any, path: string) => {
      this.currentRoute = path;
    })
  }

  ngAfterViewInit(): void {
    this.headerTabsLoaded = true;

    // next: () => this.headerMainTabs = this.headerNavTabs.find(i => i.mainTab),
    // this.headerTabWatcher$ = this.headerNavTabs.changes.subscribe({
    //   next: () => this.headerMainTabs = this.headerNavTabs.find(i => i.mainTab),
    // });
    this.headerMainTab = this.headerNavTabs.find(i => i.Main);
  }

  ngOnDestroy():void {
    this.routeChangeListener$.unsubscribe();
    this.headerTabWatcher$.unsubscribe();
  }

  contactCard(): void {
    // this.classApplied = !this.classApplied;
  }

  navigateTo(path: string): void {
    this.navigationService.navigatePathTo(path);
  }

}
