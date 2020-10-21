import { PageConfigDefault } from './../config/pageTemplate';
import { LoginModalService } from './login-modal.service';
import { UserAccessAuth } from 'src/app/security/app-user-auth';
import { SecurityService } from 'src/app/security/security.service';
import { Router, ActivationEnd, Route } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { PageTemplate } from '../config/pageTemplate';
import { Title } from '@angular/platform-browser';

@Injectable({
    providedIn: 'root',
})

export class NavigationService {
    private pageHeader: Observable<string>;
    private pageTabName: Observable<string>;
    public pageConstruction: PageTemplate = new PageConfigDefault();
    private _isFirstPage = true;
    public routeInfo: Route;

    constructor(
        private router: Router,
        private securityService: SecurityService,
        private loginModal: LoginModalService,
        private titleService: Title,
        @Inject(DOCUMENT) private document: Document
    ) { }

    public onRouteChange(callbackFn: (snapshotData: object, path: string) => void): Subscription {
        return this.router.events.subscribe((event) => {
            if (event instanceof ActivationEnd) {
                const { data, routeConfig } = event.snapshot;
                console.log(event.snapshot);
                if (routeConfig.data !== undefined) {
                    this.constructPage(routeConfig.data);
                    const url = '/' + event.snapshot.pathFromRoot.map(r => r.url).filter(f => !!f[0]).map(([f]) => f.path).join('/');
                    // console.log(routeConfig.path);
                    // console.log(event.snapshot);
                    // this.currentRoute = event.snapshot.routeConfig.path;
                    this.routeInfo = routeConfig;
                    callbackFn(data, url);
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

    public isFirstPage(): boolean {
        switch (this._isFirstPage) {
            case true:
                this._isFirstPage = false;
                return true;
            default:
                return false;
        }
    }

    // ======================= Cleaned Up ==============
    public getData(): object {
        return this.pageConstruction;
    }

    private constructPage(data: any): void {
        const titleDefault: string = 'Geoffrey\u0027s Portfolio';

        if (this.loginModal.modalState === true) {
            this.loginModal.closeModal();
        }

        this.pageConstruction = {
            pageTitle: data.pageTitle,
            sidePanel: data.sidePanel,
            pageScroller: data.pageScroller,
            sidePanelType: data.sidePanelType,
            pageBlog: data.pageBlog,
            breadCrumb: data.breadcrumb,
            pageScrollList: [],
            firstPage: this.isFirstPage(),
        };

        switch (data.pageTitle !== undefined) {
            case true:
                this.titleService.setTitle(data.pageTitle);
                break;
            default:
                this.titleService.setTitle(titleDefault);
                break;
        }
    }


    public navSnapshot(callbackFn: (snapshotData: object, path: string) => void): Subscription {
        return this.router.events.subscribe((event) => {
            if (event instanceof ActivationEnd) {
                const { data, routeConfig } = event.snapshot;
                if (routeConfig.data !== undefined) {
                    this.constructPage(routeConfig.data);
                    const url = '/' + event.snapshot.pathFromRoot.map(r => r.url).filter(f => !!f[0]).map(([f]) => f.path).join('/');
                    // this.currentRoute = event.snapshot.routeConfig.path;
                    callbackFn(data, routeConfig.path);
                }
            }
        });
    }
}
