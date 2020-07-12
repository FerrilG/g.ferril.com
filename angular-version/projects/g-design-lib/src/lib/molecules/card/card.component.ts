import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class GDLCardComponent implements OnInit {
  @Input() public cardType: string;
  @Input() public title: string;
  @Input() public icon: string;
  @Input() public iconColor: string;

  constructor() { }

  ngOnInit() {
    
  }

}
