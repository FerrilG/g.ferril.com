import { Component, OnInit, ElementRef, Input } from '@angular/core';
@Component({
    selector: 'g-header-tab',
    template: `
    <a routerLink="{{ navLink }}" [attr.title]="navTitle + '.'" [attr.isLink]="isLink"
    [attr.active]="mainTab ? undefined : (isActive ? true : undefined)" class="d-flex align-items-center"
    ><span class="header-nav-inner"><ng-content></ng-content></span></a>
    `,
    styleUrls: ['header-tab.component.scss'],
    exportAs: 'g-Header-tab',
})

export class HeaderTabComponent implements OnInit {
    @Input() navTitle: string;
    @Input() mainTab = false;
    @Input() isLink = true;
    @Input() isActive = false;
    @Input() navLink: string;

    constructor(private elementRef: ElementRef) { }

    ngOnInit(): void {

    }

    public forceClick(): void {
        this.elementRef.nativeElement.click();
    }
}