import { Component, OnInit } from '@angular/core';
import { FollowlinkService } from '../services/followlink.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  constructor(private followlink: FollowlinkService) { }

  ngOnInit() {
  }

}
