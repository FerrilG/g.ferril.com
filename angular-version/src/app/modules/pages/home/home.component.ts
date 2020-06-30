import { Component, OnInit, Input } from '@angular/core';
import { ProjectList } from 'src/app/core/mocks/project.mock';
import { ProjectsService } from 'src/app/core/services/projects.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  projects = ProjectList;
  constructor(private projectService: ProjectsService, private router: Router) { }

  ngOnInit() {
    this.getProjects();
  }
  getProjects(): void {
    this.projects = this.projectService.getProjects();
  }

  loadProj(el): void {
    let selectedProject: any;
    [...this.projects].forEach(item => {
      if (item.number == el.getAttribute('id').substring(5)) {
        return selectedProject = item.number;
      }
    });
    [...el.parentElement.children].forEach(sib => sib.classList.remove('selected'));
    el.classList.add('selected');
    const projectImg = document.body.querySelector('#proj-inspector img');
    const projectName = document.body.querySelector('#proj-inspector #proj-inspect-info #inspect-info-name');
    const projectdesc = document.body.querySelector('#proj-inspector #proj-inspect-info #inspect-info-description');
    const projectLink = document.body.querySelector('#proj-inspector #proj-inspect-info #inspect-info-link');
    const projectLinkText = document.body.querySelector('#proj-inspector #proj-inspect-info #inspect-info-link span');
    // projectImg.textContent = this.projects[selectedProject].overview;
    projectName.textContent = this.projects[selectedProject].name;
    projectdesc.textContent = this.projects[selectedProject].overview;
    // projectLink.setAttribute('routerlink', '/work/' + this.projects[selectedProject].folder);
    // projectLink.setAttribute('ng-reflect-router-link', '/work/' + this.projects[selectedProject].folder);
    // projectLink.setAttribute('href', '/work/' + this.projects[selectedProject].folder);
    projectLinkText.textContent = 'Click to read more';
    // alert(this.projects[selectedProject - 1].lock + ' ' + selectedProject + ' ' + projectdesc.textContent);
  }
  openProj(el): void {

  }
}
