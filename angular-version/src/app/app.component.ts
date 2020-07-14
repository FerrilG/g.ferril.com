import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-version';

  constructor (private el: ElementRef) {
    // Sets app-root attribute
    // (this.el.nativeElement as HTMLElement).setAttribute('data-app-container', '');
  }
}
