import { Component, OnInit } from '@angular/core';
import { SecurityService } from 'src/app/security/security.service';
import { ProjectTemplateService } from '../../services/projects.service';
import { LoginModalService } from './../../../services/login-modal.service';

@Component({
  selector: 'g-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})

export class ProjectsComponent implements OnInit {
  public projects = this.projectService.projectData;
  public securityObject = this.securityService.securityObject;

  constructor(
    private readonly projectService: ProjectTemplateService,
    private readonly securityService: SecurityService,
    private readonly loginModal: LoginModalService,
  ) { }

  ngOnInit(): void { }

  unlockSite(): void {
    this.loginModal.modalState = true;
  }
}
