import { SecurityService } from 'src/app/security/security.service';
import { Component, OnInit, DoCheck, AfterViewInit, OnChanges, ChangeDetectorRef } from '@angular/core';
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

  constructor(private projectService: ProjectsService, private securityService: SecurityService) {
  }

  ngOnInit(): void {
    // alert(this.securityService.os = this.securityService.os + 1);
    console.log(this.securityService.securityObject);
  }

}
