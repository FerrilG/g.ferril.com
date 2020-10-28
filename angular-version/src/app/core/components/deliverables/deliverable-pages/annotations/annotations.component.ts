import { DeliverableTemplateService } from 'src/app/core/services/deliverable-list.service';
import { DeliverableProperties } from 'src/app/config/types/projects.config';
import { Component } from '@angular/core';

@Component({
    templateUrl: './annotations.component.html',
    styleUrls: ['./annotations.component.scss']
})
export class DelAnnotationsComponent {
    public readonly content: DeliverableProperties = this.deliverableService.renderContent();
    public readonly imgFolder: string = this.content.cover + this.content.folder + '/';

    constructor(private deliverableService: DeliverableTemplateService) { }
}
