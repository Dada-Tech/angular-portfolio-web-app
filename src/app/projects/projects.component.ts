import {Component, OnInit} from '@angular/core';

import {PostsService} from '../services/posts.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})

export class ProjectsComponent implements OnInit {

  constructor(private postService: PostsService) { }
  posts;

  ngOnInit() {
    this.loadPosts();
  }

  loadPosts() {
    this.postService.loadPosts().subscribe(
      response => {
        this.posts = response;
      }
    );
  }
}
