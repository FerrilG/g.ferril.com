import { Injectable } from '@angular/core';
declare const gtag: (...args: any[]) => void;

@Injectable()
export class AnalyticsService {

    public gaPage: string;

    public googleTag(category: string, action: string, label: string | {
        [key: string]: any
    }): void {
        gtag(category, action, label);
    }
}
