import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'gdl-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class GDLButtonComponent implements OnInit {
  @Input() private type: string;

  constructor() { }

  ngOnInit() {
  }

}
