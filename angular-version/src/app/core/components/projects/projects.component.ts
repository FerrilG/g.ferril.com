import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../services/projects.service';

@Component({
  selector: 'g-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  public projects: {} = null;

  constructor(private projectService: ProjectsService) {
    this.projects = this.projectService.projectData;
  }

  ngOnInit() { }

}
