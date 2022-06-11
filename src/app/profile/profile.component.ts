import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  typeSelected!: string;

  constructor(
    private spinner: NgxSpinnerService
  ) {
    this.typeSelected = 'ball-fussion';
  }

  ngOnInit(): void {
    this.spinner.show();
    setTimeout(() => {
        this.spinner.hide();
    }, 2000);
  }

}
