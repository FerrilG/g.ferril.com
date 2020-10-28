import { Injectable } from '@angular/core';
import { DeliverableList, DeliverableProperties } from 'src/app/config/types/projects.config';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DeliverableTemplateService {
  // public deliverableData: Array<DeliverableProperties> = [];

  // constructor() {
  //   this.deliverableData = DeliverableList;
  //   // console.log(this.deliverableData);
  //   // alert('ji');
  // }
  public deliverableData: Array<DeliverableProperties> = [];

  constructor(private http: HttpClient) {
    // console.log(ProjectList);
    this.deliverableData = DeliverableList;
    this.deliverableData.forEach((page, i) => {
      const contentObject: string = 'assets/content/' + page.folder + '.json';
      // console.log(project.folder);
      // console.log(contentObject);
      // console.log(this.injectContent(contentObject, i));
      // console.log(typeof this.injectContent(contentObject, i));

      // project.content = this.injectContent(contentObject, i);
    });
  }

  private injectContent(folder: string, index?: number) {
    const info = [];
    this.http.get(folder)
      .pipe(
        catchError(err => of([]))
      ).subscribe((event: object[]) => {
        if (event !== null) {
          event.forEach(val => {
            info.push(val);
          });
        };
      });
    return info;
  }

  public getContent(key: string) {
    const openProject: number = this.deliverableData.findIndex(project => project.folder === key);
    return this.deliverableData[openProject];
  }


  public renderContent() {
    const url = window.document.URL.replace(window.document.baseURI, '');
    const folder = url.replace(url.substring(url.indexOf('/')), '');
    const project = url.substring(url.indexOf('/') + 1);

    const openProj = this.getContent(project);

    switch (folder) {
      case 'projects':
        // console.log('proj');
        break;
      default:
        // console.log('other');
        break;
    }
    console.log(openProj);
    return openProj;
  }
}
