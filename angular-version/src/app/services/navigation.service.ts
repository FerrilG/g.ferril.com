import { Router, ActivationEnd } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})

export class NavigationService {
    private pageHeader: Observable<string>;
    private pageTabName: Observable<string>;

    public currentRoute: string;

    private _isFirstPage = false;

    constructor(private router: Router, @Inject(DOCUMENT) private document: Document) {
        // this.pageHeader = new Observable<string>(observer => {
        //     this.onRouteChange(({ pageHeader }) => {
        //         if (pageHeader) {
        //             observer.next(pageHeader);
        //         }
        //     });
        // });
    }

    public onRouteChange(callbackFn: (snapshotData: object, path: string) => void): Subscription {
        return this.router.events.subscribe((event) => {
            if (event instanceof ActivationEnd) {
                const { data, routeConfig } = event.snapshot;
                callbackFn(data, routeConfig.path);
            }
        });
    }

    getPageTitle(): Observable<string> {
        return this.pageHeader;
    }

    getTabName(): Observable<string> {
        return this.pageTabName;
    }


    public navigatePathTo(path: string): void {
        this.router.navigate([path]);
    }

    public set isFirstPage(isFirstPage: boolean) {
        this._isFirstPage = isFirstPage;
    }

    public get isFirstPage(): boolean {
        return this._isFirstPage;
    }
}
