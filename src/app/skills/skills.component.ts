import { Component, OnInit } from '@angular/core';
import { FollowlinkService } from '../services/followlink.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  animations: []
})
export class SkillsComponent implements OnInit {

  constructor(public followlink: FollowlinkService, private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.spinner.show().catch(err => { console.error(err); });
    setTimeout(() => {
      this.spinner.hide().catch(err => { console.error(err); });
    }, 1000);
  }
}
