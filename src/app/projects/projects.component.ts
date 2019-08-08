import { Component, OnInit } from '@angular/core';
import {PostsService} from '../services/posts.service';
import {Post} from '../home/home.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})

export class ProjectsComponent implements OnInit {
  posts: Array<Post>;

  constructor(private postService: PostsService) { }

  ngOnInit() {
    this.loadPosts();
  }

  loadPosts() {
    this.postService.loadPosts().subscribe(
      response => {
        this.posts = response;
        console.log(this.posts);
      }
    );
  }
}
