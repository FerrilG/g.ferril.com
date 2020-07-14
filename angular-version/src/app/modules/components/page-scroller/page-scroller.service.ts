import { Injectable } from '@angular/core';

// import { ProjectProp } from 'src/app/config/projects.config';
// import { ProjectList } from './../mocks/project.mock';

@Injectable({
  providedIn: 'root'
})
export class PageScrollerService {
  public sectionInfo: SectionInfo[] = [];

  getSections() {
    // let sections = [];
    // sections = Array.prototype.slice.call(document.querySelectorAll("[section] span"));
    // sections.map(item => {
    //   this.sectionInfo.push({
    //     name: item.innerHTML,
    //     target: item.parentElement
    //   });
    // })
    // console.log(sections);
    // console.log('Break');
    // return sections;
    // console.log(document.querySelectorAll("[section] span"));
  }
  constructor() { }
}
// console.log(document.querySelectorAll("[section] span"));
// public sectionInfo: SectionInfo[] = [];

export interface SectionInfo {
  name: any;
  target: object;
}
