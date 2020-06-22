import { Component, Input, Output } from '@angular/core';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
})
export class CardComponent {
  @Input() title: string;
  @Input() icon: string;
  @Input() iconColor: string;
}
