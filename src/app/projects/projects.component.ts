import { Component, OnInit} from '@angular/core';
import {PostsService} from '../services/posts.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})

export class ProjectsComponent implements OnInit {
  constructor(private postService: PostsService) { }
  posts;
  alldone = false;

  ngOnInit() {
    this.loadPosts();
  }

  exampleMethodParent($event) {
    if (this.posts.length - 1 === parseInt($event, 10)) {
      this.alldone = true;
    }
  }

  loadPosts() {
    this.postService.loadPosts().subscribe(
      response => {
        this.posts = response;
        this.posts = this.posts.concat(this.posts);
        this.posts = this.posts.concat(this.posts);
        this.posts = this.posts.concat(this.posts);
      }
    );
  }
}
