import { NavigationService } from 'src/app/services/navigation.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { DOCUMENT } from '@angular/common';
import { ProjectTemplateService } from '../services/projects.service';

@Component({
  selector: 'g-sidepanel',
  templateUrl: './sidepanel.component.html',
  styleUrls: ['./sidepanel.component.scss']
})
export class SidepanelComponent implements OnInit, OnDestroy {

  private routeChangeListener$: Subscription;
  private sidePanelType = null;
  public readonly projects = this.projectService.projectData;

  constructor(
    private readonly projectService: ProjectTemplateService,
    public navigationService: NavigationService,
    @Inject(DOCUMENT) private document: any
  ) { }

  ngOnInit(): void {
    this.projectService.projectData.forEach(project => {
      console.log(project.name);
    });
    // console.log(this.projectService.projectData);

    // this.routeChangeListener$ = this.navigationService
    // .onRouteChange((data: any, path: string) => {
    //   this.sidePanelType = data.sidePanelType;
    // });
  }

  ngOnDestroy(): void {
    // this.routeChangeListener$.unsubscribe();
  }

}
