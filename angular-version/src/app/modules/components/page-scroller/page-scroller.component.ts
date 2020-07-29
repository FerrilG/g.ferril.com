import { Component, OnInit, AfterContentInit } from '@angular/core';
import { stringify } from 'querystring';

@Component({
  selector: 'g-page-scroller',
  templateUrl: './page-scroller.component.html',
  styleUrls: ['./page-scroller.component.scss']
})
export class PageScrollerComponent implements OnInit {
  public sectionInfo: SectionInfo[] = [];
  public selectedItem: object;

  constructor() {
  }

  ngOnInit() {
    let sections = [];
    const listItems = 'section > span, [section] span';
    sections = Array.prototype.slice.call(document.querySelectorAll(listItems));
    sections.map(item => {
      this.sectionInfo.push({
        name: item.innerHTML,
        target: item.parentElement
      });
    });
  }

  scrollClick(el: HTMLElement, item: HTMLElement) {
    this.selectedItem = item;
    el.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    });
  }
}

interface SectionInfo {
  name: any;
  target: object;
}
