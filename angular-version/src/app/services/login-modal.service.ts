import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})

export class LoginModalService {
    public modalState: boolean = false;

    public modalStatus(): boolean {
        return this.modalState;
    }

    public unlockSite(): void {
        // this.modalState = true;
        // alert(this.modalState);
    }

    public closeModal(): void {
        this.modalState = false;
    }

}
