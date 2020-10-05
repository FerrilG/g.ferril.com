import { Router, ActivationEnd } from '@angular/router';
import { AnalyticsService } from './analytics.service';
import { NgModule } from "@angular/core";
import { AnalyticsDirective } from "./analytics.directive";

@NgModule({
    declarations: [AnalyticsDirective],
    providers: [AnalyticsService],
    exports: [AnalyticsDirective],
})

export class AnalyticsModule {
    constructor(private router: Router, private analyticsService: AnalyticsService) {
        router.events.subscribe((event) => {
            if (event instanceof ActivationEnd) {
                const snapshotData = event.snapshot.data;
                if (snapshotData.gaPage !== undefined) {
                    analyticsService.gaPage = snapshotData.gaPage;
                    analyticsService.googleTag('config', 'UA-114105270-1', {
                        page_path: '4.0/' + snapshotData.gaPage,
                    });
                }
            }
        });
    }
}
