import { Component, OnInit } from '@angular/core';
import { PROJECTS } from 'src/app/model/data-project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  fypProject = PROJECTS[0];

  ggcgProject = PROJECTS[1];

  constructor() { }

  ngOnInit(): void {
  }

}
