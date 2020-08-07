import { Injectable } from '@angular/core';
import { ProjectList } from './../mocks/project.mock';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  public projectData: Array<any> = null;

  constructor(private http: HttpClient) {
    this.projectData = ProjectList;
  }
}
