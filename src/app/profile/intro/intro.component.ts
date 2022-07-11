import { Component, OnInit } from '@angular/core';
import { SKILLSLIST } from 'src/app/model/data';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  skills = SKILLSLIST;

  constructor() { }

  ngOnInit(): void {
  }

}
