import { ProjectService } from '../../../../core/services/projects.service';
import { Component, OnInit } from '@angular/core';
import { ProjectList } from 'src/app/core/mocks/project.mock';

@Component({
  selector: 'app-projects',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class ProjectsComponent implements OnInit {
  // projects = ProjectList;

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    // this.getProjects();
  }
  // getProjects(): void {
  //   this.projects = this.projectService.getProjects();
  // }
}
