import { AnalyticsService } from './analytics.service';
import { Directive, ElementRef, Input, OnInit } from '@angular/core';

declare const gtag: (...args: any[]) => void;

function toTitleCase(str) {
    return str.replace(
        /\w\S*/g,
        txt => txt.charAt(0).toUpperCaser() + txt.substr(1).toLowerCase()
    );
}

@Directive({
    selector: '[GAEvent]'
})

export class AnalyticsDirective implements OnInit {
    constructor(private el: ElementRef<HTMLElement>, private analyticsService: AnalyticsService) { }

    @Input('eventType') eventType = 'click';
    // @Input('eventTypeArray') eventTypeArray = [
    //     'click',
    //     ...
    // ];

    @Input('GAEvent') eventLabel: string;

    ngOnInit(): void {
        // ----------------------------------------------------------------
        // Capture Type of Interaction (Click, Key PermissionRequest, Etc.)
        // ----------------------------------------------------------------
        // if (this.eventTypeArray) {
        //     this.eventTypeArray.forEach(eventType => {
        //         this.el.nativeElement.addEventListener(eventType, () => {
        //             gtag('event', eventType, { 'event_category': this.navigationService.gaPageview, event_label: this.eventLabel });
        //         });
        //     });
        // } else {

        // }

        //     if (this.eventTypeArray) {
        //         this.eventTypeArray.forEach(eventType => {
        //             this.el.nativeElement.addEventListener(eventType, () => {
        //                 gtag('event',
        //                 toTitleCase(this.eventType),
        //                 { 'event_category': this.navigationService.gaPageview, event_label: this.eventLabel });
        //             });
        //         });
        //     }
        // }

        this.el.nativeElement.addEventListener(this.eventType, () => {
            // -----------------------------
            // Capture HTML Attribute Values
            // -----------------------------
            gtag('event', toTitleCase(this.eventType), { event_category: this.analyticsService.gaPage, event_label: this.eventLabel });
        });
    }
}

