import { NavigationService } from './../../../services/navigation.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  constructor(private navigationService: NavigationService) { }

  ngOnInit() {
    // console.log(this.navigationService);
  }

}
