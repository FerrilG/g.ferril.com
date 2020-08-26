import { NavigationService } from 'src/app/services/navigation.service';
import { Component, OnInit, DoCheck } from '@angular/core';
import { PageScrollerService, SectionInfo } from '../../../services/page-scroller.service';

@Component({
  selector: 'g-page-scroller',
  templateUrl: './page-scroller.component.html',
  styleUrls: ['./page-scroller.component.scss']
})
export class PageScrollerComponent implements OnInit, DoCheck {
  public selectedItem: HTMLElement = null;
  public scrollList: Array<SectionInfo> = new Array<SectionInfo>();
  // tslint:disable-next-line: variable-name
  private _newList: Array<SectionInfo>;

  constructor(
    private sectionService: PageScrollerService,
    private navService: NavigationService) { }

  ngOnInit(): void { }

  ngDoCheck(): void {
    this._newList = this.sectionService.getScrollList();
    if (this.scrollList !== this._newList) {
      // console.log(this._newList);
      this.scrollList = this._newList;
    }
  }

  public scrollClick(el: HTMLElement, item: HTMLElement) {
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
