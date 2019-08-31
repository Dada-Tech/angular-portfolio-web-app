import { Component, OnInit} from '@angular/core';
import {PostsService} from '../services/posts.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})

export class ProjectsComponent implements OnInit {
  constructor(private postService: PostsService, private spinner: NgxSpinnerService) { }
  posts;
  alldone = false;

  ngOnInit() {
    this.loadPosts();
    this.spinner.show();
  }

  checkShowAllProjects($event) {
    if (this.posts.length - 1 === parseInt($event, 10)) {
      // to delay for a second, to see the loader and not epileptic flash on quick responses
      setTimeout(() => {
        this.alldone = true;
        this.spinner.hide();
      }, 1000);
    }
  }

  loadPosts() {
    this.postService.loadPosts().subscribe(
      response => {
        this.posts = response;
      }
    );
  }
}
