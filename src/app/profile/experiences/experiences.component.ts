import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent implements OnInit {

  events: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.events = [
      {content: 'Ordered', date: '15/02/2021 10:30', status: 'R'},
      {content: 'Processing', date: '15/02/2021 14:30', status: 'R'},
      {content: 'Shipped'  },
      {content: 'Delivered'},
    ];
  }

}
