import { NavigationService } from 'src/app/services/navigation.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PageScrollerService {
  private sectionInfo: SectionInfo[] = [];
  private _pageScrollList: Array<SectionInfo> = new Array<SectionInfo>();

  constructor(
    private navService: NavigationService,
  ) { }

  public renderScrollList(): void {
    const newList: Array<SectionInfo> = new Array<SectionInfo>();
    // let sections = [];
    const sections = Array.prototype.slice.call(document.querySelectorAll(DOMSelectors.selectors));
    sections.forEach((item, i) => {
      newList.push(sections[i] = {
        name: item.innerHTML,
        target: item.parentElement
      });
      if (i > 0) {
      }
    });
    this._pageScrollList = newList;
  }

  public getScrollList(): Array<SectionInfo> {
    return this._pageScrollList;
  }
}

export interface SectionInfo {
  name: any;
  target: object;
}

enum DOMSelectors {
  selectors = `
  section > span,
  [section] span,
  section > h4
  `
}
