import { NavigationService } from 'src/app/services/navigation.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'g-sidepanel',
  templateUrl: './sidepanel.component.html',
  styleUrls: ['./sidepanel.component.scss']
})
export class SidepanelComponent implements OnInit, OnDestroy {

  private routeChangeListener$: Subscription;
  private sidePanelType = null;

  constructor(
    public navigationService: NavigationService,
    @Inject(DOCUMENT) private document: any
  ) { }

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
