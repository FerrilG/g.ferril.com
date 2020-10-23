import { SecurityService } from './../security/security.service';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})

export class LoginModalService {
    public navPath: string;

    constructor(
        private securityService: SecurityService,
    ) { }

    public modalState: boolean = false;

    public modalStatus(): boolean {
        return this.modalState;
    }

    public unlockSite(path?: string): void {
        this.modalState = true;
        this.navPath = path;
    }

    public closeModal(): void {
        this.modalState = false;
    }

}
