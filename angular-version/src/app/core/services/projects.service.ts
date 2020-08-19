import { ProjectProperties } from 'src/app/config/projects.config';
// import { data } from 'src/app/config/params/project-list.json';
import { Injectable } from '@angular/core';
import { ProjectList } from './../mocks/project.mock';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
// import * as data from 'src/app/config/params/project-content';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  public projectData: Array<ProjectProperties> = null;

  constructor(private http: HttpClient) {
    this.projectData = ProjectList;
    this.projectData.forEach((project, i) => {
      this.injectContent(i);
    });
  }

  public getContent(key: string) {
    const openProject: number = this.projectData.findIndex(project => project.folder === key);
    return this.projectData[openProject].content;
  }

  private injectContent(index: number) {
    const folder: string = this.projectData[index].folder;
    this.http.get('assets/content/' + folder + '.json').subscribe(data => {
      this.projectData[index].content.push(data);
    });
  }
}
