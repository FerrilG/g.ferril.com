import { LoginModalService } from './login-modal.service';
import { UserAccessAuth } from 'src/app/security/app-user-auth';
import { SecurityService } from 'src/app/security/security.service';
import { Router, ActivationEnd, ActivationStart } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { PageTemplate } from '../config/pageTemplate';

@Injectable({
    providedIn: 'root',
})

export class NavigationService {
    private pageHeader: Observable<string>;
    private pageTabName: Observable<string>;
    public pageConstruction: PageTemplate = null;
    public currentRoute: string;
    private _isFirstPage = true;

    constructor(
        private router: Router,
        private securityService: SecurityService,
        private loginModal: LoginModalService,
        @Inject(DOCUMENT) private document: Document
    ) {
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
                if (routeConfig.data !== undefined) {
                    this.constructPage(routeConfig.data);
                    callbackFn(data, routeConfig.path);
                }
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

    // ======================= Cleaned Up ==============
    public getData(): object {
        return this.pageConstruction;
    }

    private constructPage(data: any): void {
        if (this.loginModal.modalState === true) {
            this.loginModal.closeModal();
        }

        this.pageConstruction = {
            sidePanel: data.sidePanel,
            pageSectionScroller: data.pageSectionScroller,
            sidePanelType: data.sidePanelType,
            pageBlog: data.pageBlog,
            breadCrumb: data.breadcrumb,
        }
    }
}
