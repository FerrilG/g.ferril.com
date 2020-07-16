import { Component, OnInit, AfterContentInit } from '@angular/core';

@Component({
  selector: 'g-page-scroller',
  templateUrl: './page-scroller.component.html',
  styleUrls: ['./page-scroller.component.scss']
})
export class PageScrollerComponent implements OnInit {
  public sectionInfo: SectionInfo[] = [];
  public selectedItem: any;

  constructor() {
  }

  ngOnInit() {
    let sections = [];
    sections = Array.prototype.slice.call(document.querySelectorAll('[section] span'));
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
