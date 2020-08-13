import { Component, OnInit, AfterContentInit, OnChanges, SimpleChanges, DoCheck } from '@angular/core';
import { stringify } from 'querystring';
import { PageScrollerService } from './page-scroller.service';

@Component({
  selector: 'g-page-scroller',
  templateUrl: './page-scroller.component.html',
  styleUrls: ['./page-scroller.component.scss']
})
export class PageScrollerComponent implements OnInit {
  public sectionInfo: object = this.sectionService.getSections();
  public selectedItem: object = null;

  constructor(private sectionService: PageScrollerService) { }

  ngOnInit(): void {
  }

  scrollClick(el: HTMLElement, item: HTMLElement) {
    this.selectedItem = item;
    const yOffset: number = 104;
    const pagePanel: HTMLElement = document.getElementById('mainContent');
    const y: number = el.getBoundingClientRect().top + pagePanel.scrollTop - yOffset;
    pagePanel.scrollTo({
      top: y,
      behavior: 'smooth',
    });
  }
}
