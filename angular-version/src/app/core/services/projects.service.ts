import { ProjectProperties } from 'src/app/config/projects.config';
// import { data, projList } from 'src/app/config/params/project-list.json';
import { Injectable } from '@angular/core';
import { ProjectList } from './../mocks/project.mock';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, retry, catchError } from 'rxjs/operators';
import { Subscription, Observable, of } from 'rxjs';
import { error } from '@angular/compiler/src/util';
// import * as data from 'src/app/config/params/project-content';

@Injectable({
  providedIn: 'root'
})


export class ProjectService {
  public projectData: Array<ProjectProperties> = [];

  constructor(private http: HttpClient) {
    this.projectData = ProjectList;
    this.projectData.forEach((project, i) => {
      const contentObject: string = 'assets/content/' + project.folder + '.json';
      // console.log(contentObject);
      // console.log(this.injectContent(contentObject, i));
      project.content = this.injectContent(contentObject, i);

    });
  }

  private injectContent(folder: string, index?: number) {
    const info = [];
    this.http.get(folder)
      .pipe(
        retry(1),
        catchError(err => of([]))
      ).subscribe((event: object[]) => {
        if (event !== null) {
          event.forEach(val => {
            info.push(val);
          });
        }
      });
    return info;



    // const info = [];
    // this.http.get(folder).subscribe((event: object[]) => {
    //   if (event !== null) {
    //     event.forEach(val => {
    //       info.push(val);
    //     });
    //   }
    // });
    // return info;
  }


  // private injectContent(index: number) {
  //   const folder: string = this.projectData[index].folder;
  //   const contentObject: string = 'assets/content/' + folder + '.json';
  //   // console.log(index);

  //   // let po: Subscription;
  //   this.http.get(contentObject).subscribe(data => {
  //     // this.projectData[index].content.push(data);

  //   });
  // }

  public getContent(key: string) {
    const openProject: number = this.projectData.findIndex(project => project.folder === key);
    return this.projectData[openProject];
  }


  public renderContent() {
    const url = window.document.URL.replace(window.document.baseURI, '');
    const folder = url.replace(url.substring(url.indexOf('/')), '');
    const project = url.substring(url.indexOf('/') + 1);
    // console.log(folder, project);

    const openProj = this.getContent(project);

    switch (folder) {
      case 'projects':
        // console.log('proj');
        break;
      default:
        // console.log('other');
        break;
    }
    // console.log('Project Content: ', openProj);
    // console.log(openProj);
    return openProj;
  }
}
