import { NavigationService } from 'src/app/services/navigation.service';
import { ActivatedRoute, Router, ActivationEnd } from '@angular/router';
import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { DOCUMENT } from '@angular/common';
import { ProjectTemplateService } from '../services/projects.service';
import { SecurityService } from 'src/app/security/security.service';

@Component({
  selector: 'g-sidepanel',
  templateUrl: './sidepanel.component.html',
  styleUrls: ['./sidepanel.component.scss']
})
export class SidepanelComponent implements OnInit, OnDestroy {

  private routeChangeListener$: Subscription;
  public isActive: string = this.navigationService.routeInfo.path;
  private sidePanelType = null;
  public readonly projects = this.projectService.projectData;
  public readonly securityObject = this.securityService.securityObject;

  constructor(
    private readonly projectService: ProjectTemplateService,
    private readonly securityService: SecurityService,
    private readonly navigationService: NavigationService,
    @Inject(DOCUMENT) private document: any
  ) {
    this.routeChangeListener$ = this.navigationService.navSnapshot(event => {
      this.isActive = this.navigationService.routeInfo.path;
      // console.log(event);
    });
    // console.log(this.navigationService.poppp);
  }

  ngOnInit(): void {

    // this.routeChangeListener$ = this.navigationService
    // .onRouteChange((data: any, path: string) => {
    //   this.sidePanelType = data.sidePanelType;
    // });
  }

  ngOnDestroy(): void {
    // this.routeChangeListener$.unsubscribe();
  }

}
