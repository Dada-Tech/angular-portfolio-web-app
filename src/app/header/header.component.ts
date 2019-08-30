import { Component, OnInit } from '@angular/core';
// import { Router, RouterModule } from '@angular/router';
import { FollowlinkService } from '../services/followlink.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private followlink: FollowlinkService) { }

  ngOnInit() {
  }

}
