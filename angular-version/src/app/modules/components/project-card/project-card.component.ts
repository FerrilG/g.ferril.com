import { SecurityService } from 'src/app/security/security.service';
import { ProjectsService } from './../../../core/services/projects.service';
import { Component, OnInit, Input, HostListener, ElementRef } from '@angular/core';
import { Template } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'g-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {

  @Input() i: number;
  private project: {} = null;

  constructor(private projectService: ProjectsService, private el: ElementRef, private securityService: SecurityService) { }

  ngOnInit() {
    this.project = this.projectService.projectData[this.i];
    // console.log(this.securityService.loggedIn);
  }

  @HostListener('mouseenter') onMouseEnter() {
    if (this.projectService.projectData[this.i]['lock']) {
      this.el.nativeElement.children[0].children[0].style.backgroundColor = 'yellow';
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    if (this.projectService.projectData[this.i]['lock']) {
      this.el.nativeElement.children[0].children[0].style.backgroundColor = 'red';
    }
  }

  // private highlight(color: string) {
  //   this.el.nativeElement.style.backgroundColor = color;
  // }
}

// constructor(private el: ElementRef) { }
