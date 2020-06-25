import { Component, Input, OnInit, Optional, AfterContentInit, ElementRef, Inject } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: 'card.component.html'
})
export class CardComponent {
  @Input() cardType: string;
  @Input() title: string;
  @Input() icon: string;
  @Input() iconColor: string;

}
