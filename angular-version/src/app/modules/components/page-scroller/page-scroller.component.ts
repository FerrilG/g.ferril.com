import { Component, OnInit, AfterContentInit, OnChanges, SimpleChanges, DoCheck } from '@angular/core';
import { stringify } from 'querystring';
import { PageScrollerService } from './page-scroller.service';

@Component({
  selector: 'g-page-scroller',
  templateUrl: './page-scroller.component.html',
  styleUrls: ['./page-scroller.component.scss']
})
export class PageScrollerComponent implements OnInit {
  private sectionInfo: object = this.sectionService.getSections();
  private selectedItem: object = null;

  constructor(private sectionService: PageScrollerService) { }

  ngOnInit(): void {
  }

  scrollClick(el: HTMLElement, item: HTMLElement) {
    this.selectedItem = item;
    el.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    });
  }
}
