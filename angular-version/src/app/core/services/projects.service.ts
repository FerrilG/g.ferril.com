// import { data } from 'src/app/config/params/project-list.json';
import { Injectable } from '@angular/core';
import { ProjectList } from './../mocks/project.mock';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
// import * as data from 'src/app/config/params/project-content';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  public projectData: Array<any> = null;
  public test: Array<object> = [];

  constructor(private http: HttpClient) {
    this.projectData = ProjectList;
    this.projectData.forEach((project, i) => {
      this.loadContent(i);
    });
  }

  private loadContent(index: number) {
    const folder: string = this.projectData[index].folder;
    this.http.get('assets/content/' + folder + '.json').subscribe(data => {
      this.projectData[index].content = data;
    });
  }
}
