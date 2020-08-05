import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public show: boolean = false;
  public buttonName: string = 'Show';

  constructor() { }

  ngOnInit() {
  }

  toggleScroll() {
    this.show = !this.show;

    if (this.show) {
      this.buttonName = 'Hide';
    } else {
      this.buttonName = 'Show';
    }
  }

}
