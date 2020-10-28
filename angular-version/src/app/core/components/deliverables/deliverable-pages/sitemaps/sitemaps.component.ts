import { DeliverableTemplateService } from 'src/app/core/services/deliverable-list.service';
import { DeliverableProperties } from 'src/app/config/types/projects.config';
import { Component } from '@angular/core';

@Component({
    templateUrl: './sitemaps.component.html',
    styleUrls: ['./sitemaps.component.scss']
})
export class DelSitemapsComponent {
    public readonly content: DeliverableProperties = this.deliverableService.renderContent();
    public readonly imgFolder: string = this.content.cover + this.content.folder + '/';

    constructor(private deliverableService: DeliverableTemplateService) { }
}
