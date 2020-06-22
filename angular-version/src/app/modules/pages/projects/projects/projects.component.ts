import { ProjectsService } from './../../../../core/services/projects.service';
import { Component, OnInit } from '@angular/core';
import { ProjectList } from 'src/app/core/mocks/project.mock';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects = ProjectList;

  constructor(private projectService: ProjectsService) { }

  ngOnInit() {
    this.getProjects();
  }
  getProjects(): void {
    this.projects = this.projectService.getProjects();
  }
}
