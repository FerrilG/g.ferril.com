import { LoginModalService } from './../../../services/login-modal.service';
import { SecurityService } from 'src/app/security/security.service';
import { Component, OnInit, DoCheck, AfterViewInit, OnChanges, ChangeDetectorRef, Directive } from '@angular/core';
import { ProjectService } from '../../services/projects.service';
import { NavigationService } from 'src/app/services/navigation.service';
import { Router, ActivationEnd } from '@angular/router';

@Component({
  selector: 'g-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})

export class ProjectsComponent implements OnInit {
  public projects = this.projectService.projectData;
  public securityObject = this.securityService.securityObject;

  constructor(
    private projectService: ProjectService,
    private securityService: SecurityService,
    private loginModal: LoginModalService,
  ) { }

  ngOnInit(): void {
  }

  unlockSite(): void {
    this.loginModal.modalState = true;
  }
}
