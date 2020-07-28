import { Component, OnInit } from '@angular/core';
import { ProjectList } from '../../mocks/project.mock';
import { ProjectsService } from '../../services/projects.service';

@Component({
  selector: 'g-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  public projects = ProjectList;

  constructor(private projectService: ProjectsService) { }

  ngOnInit() {
    this.getProjects();
  }

  getProjects(): void {
    this.projects = this.projectService.getProjects();
  }
}
