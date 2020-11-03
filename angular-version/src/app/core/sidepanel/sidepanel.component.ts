import { DeliverableProperties } from './../../config/types/projects.config';
import { DeliverableTemplateService } from './../services/deliverable-list.service';
import { headerLinks } from 'src/app/config/mocks/navigation-links.mock';
import { NavigationService } from 'src/app/services/navigation.service';
import { ActivatedRoute, Router, ActivationEnd } from '@angular/router';
import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { DOCUMENT } from '@angular/common';
import { ProjectTemplateService } from '../services/projects.service';
import { SecurityService } from 'src/app/security/security.service';
import { HeaderLinks } from 'src/app/config/navigation-links';
import { LoginModalService } from 'src/app/services/login-modal.service';

@Component({
  selector: 'g-sidepanel',
  templateUrl: './sidepanel.component.html',
  styleUrls: ['./sidepanel.component.scss']
})
export class SidePanelComponent implements OnInit, OnDestroy {

  private routeChangeListener$: Subscription;
  public isActive: string = this.navigationService.routeInfo.path;
  private sidePanelType = null;
  public readonly projects = this.projectService.projectData;
  public readonly deliverables = this.deliverableService.deliverableData;
  public readonly securityObject = this.securityService.securityObject;
  public readonly categories: HeaderLinks[] = headerLinks;

  constructor(
    private readonly projectService: ProjectTemplateService,
    private readonly deliverableService: DeliverableTemplateService,
    private readonly securityService: SecurityService,
    private readonly navigationService: NavigationService,
    private readonly loginModal: LoginModalService,
    @Inject(DOCUMENT) private document: any
  ) {
    this.routeChangeListener$ = this.navigationService.navSnapshot(event => {
      this.isActive = this.navigationService.routeInfo.path;
    });
  }

  ngOnInit(): void {
    // const localStorage = {
    //   projects: [],
    //   deliverables: [],
    // };
    // this.projectService.projectData.forEach((project, i) => {
    //   if (project.enabled === true) {
    //     localStorage.projects.push(project);
    //   }
    // });
    // this.deliverableService.deliverableData.forEach((deliverble, i) => {
    //   if (deliverble.enabled === true) {
    //     localStorage.deliverables.push(deliverble);
    //   }
    // });
    // if (localStorage.deliverables.length === 0) {
    //   this.categories.splice(2, 1);
    // }
    // console.log(localStorage);
    // console.log(this.categories);
    // console.log(this.deliverables);
  }

  ngOnDestroy(): void {
    // this.routeChangeListener$.unsubscribe();
  }
}
