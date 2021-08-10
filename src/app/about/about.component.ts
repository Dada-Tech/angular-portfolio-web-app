import { Component, OnInit } from '@angular/core';
import {FollowlinkService} from '../services/followlink.service';
import {NgxSpinnerService} from 'ngx-spinner';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.spinner.show().catch(err => { console.error(err); });
    setTimeout(() => {
      this.spinner.hide().catch(err => { console.error(err); });
    }, 1000);
  }

}
