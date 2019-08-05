import { Component, OnInit } from '@angular/core';
import {PostsService} from '../services/posts.service';
import {Post} from '../home/home.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  posts: Array<Post>;

  constructor(private postService: PostsService) { }

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
