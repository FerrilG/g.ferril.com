import { Injectable } from '@angular/core';

import { ProjectProp } from 'src/app/config/projects.config';
import { ProjectList } from './../mocks/project.mock';



@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  getProjects(): ProjectProp[] {
    return ProjectList;
  }
  constructor() { }
}
