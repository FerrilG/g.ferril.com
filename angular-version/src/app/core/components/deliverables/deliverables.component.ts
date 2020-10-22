import { DeliverableTemplateService } from './../../services/deliverable-list.service';
import { Component, OnInit } from '@angular/core';
// import { SecurityService } from 'src/app/security/security.service';
// import { ProjectTemplateService } from '../../services/projects.service';
// import { LoginModalService } from './../../../services/login-modal.service';

@Component({
    templateUrl: './deliverables.component.html',
    styleUrls: ['./deliverables.component.scss']
})

export class DeliverablesComponent implements OnInit {
    public deliverables = this.deliverableService;
    // public securityObject = this.securityService.securityObject;

    constructor(
        private readonly deliverableService: DeliverableTemplateService,
        // private readonly securityService: SecurityService,
        // private readonly loginModal: LoginModalService,
    ) { }

    ngOnInit(): void { }

    unlockSite(): void {
        // this.loginModal.modalState = true;
    }
}
