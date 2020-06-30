import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-version';

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // this.newPage();
      }
    });
  }

  // newPage() {
  //   const pageContent = document.getElementById('top');
  //   const topPos = pageContent.offsetTop;

  //   document.getElementById('page-content').scrollTop = 0;
  // }

}
