import { LoginModalService } from './../../../services/login-modal.service';
import { SecurityService } from 'src/app/security/security.service';
import { Component, OnInit, DoCheck, AfterViewInit, OnChanges, ChangeDetectorRef, Directive } from '@angular/core';
import { ProjectsService } from '../../services/projects.service';
import { NavigationService } from 'src/app/services/navigation.service';
import { Router, ActivationEnd } from '@angular/router';

@Component({
  selector: 'g-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})

export class ProjectsComponent implements OnInit {
  private projects = this.projectService.projectData;
  private securityObject = this.securityService.securityObject;

  constructor(private projectService: ProjectsService, private securityService: SecurityService, private loginModal: LoginModalService) {
  }

  ngOnInit(): void {
  }

  unlockSite(): void {
    this.loginModal.modalState = true;
    // document.getElementById('')
  }
}
