import { PageScrollerService, SectionInfo } from './../page-scroller/page-scroller.service';
import { Router, NavigationEnd } from '@angular/router';
import { Component, OnInit, AfterContentInit, AfterViewInit } from '@angular/core';


@Component({
  selector: 'g-page-template',
  templateUrl: './page-template.component.html',
  styleUrls: ['./page-template.component.scss']
})
export class PageTemplateComponent implements OnInit, AfterViewInit {

  // public sectionInfo: SectionInfo[] = [];
  // public selectedItem: any;
  poop: SectionInfo[];
  
  constructor(private pageSections: PageScrollerService) { }
  
  ngOnInit() {
    // console.log(this.pageSections.getSections());
  }

  ngAfterViewInit() {
    // console.log('ass');
    // this.getSections();
    // let sections = [];
    // sections = Array.prototype.slice.call(document.querySelectorAll("[section] span"));
    // sections.map(item => {
    //   this.sectionInfo.push({
    //     name: item.innerHTML,
    //     target: item.parentElement
    //   });
    // })
    // console.log(sections);
  }

  getSections(): void {
    // this.poop = this.pageSections.getSections();
  }
  // constructor(private router: Router, private pageScroller: PageScrollerComponent) { }

  // ngOnInit() {
  //   this.router.events.subscribe(
  //     (event: Event) => {
  //       if (event instanceof NavigationEnd) {
  //         // alert('log');
  //         // this.pageScroller.ngOnInit()
  //       }
  //     });
  // }

}

