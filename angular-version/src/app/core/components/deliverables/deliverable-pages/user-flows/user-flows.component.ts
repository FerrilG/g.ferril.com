import { DeliverableTemplateService } from 'src/app/core/services/deliverable-list.service';
import { DeliverableProperties } from 'src/app/config/types/projects.config';
import { Component } from '@angular/core';

@Component({
    templateUrl: './user-flows.component.html',
    styleUrls: ['./user-flows.component.scss']
})
export class DelUserFlowsComponent {
    public readonly content: DeliverableProperties = this.deliverableService.renderContent();
    public readonly imgFolder: string = this.content.cover + this.content.folder + '/';

    constructor(private deliverableService: DeliverableTemplateService) { }
}
