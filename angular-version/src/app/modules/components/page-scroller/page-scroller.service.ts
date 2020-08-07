import { Injectable, ChangeDetectorRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PageScrollerService {
  private sectionInfo: SectionInfo[] = [];

  constructor() { }

  getSections() {
    let sections = [];
    sections = Array.prototype.slice.call(document.querySelectorAll('section > span, [section] span, section > h4'));
    sections.forEach((item, i) => {
      this.sectionInfo.push(sections[i] = {
        name: item.innerHTML,
        target: item.parentElement
      });
    });
    return sections;
  }
}

export interface SectionInfo {
  name: any;
  target: object;
}
