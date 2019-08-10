import {Component, OnInit} from '@angular/core';

import {PostsService} from '../services/posts.service';
import {Post} from '../home/home.component';
import { ModalService } from '../_modal';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})

export class ProjectsComponent implements OnInit {

  constructor(private postService: PostsService, private modalService: ModalService) { }
  temp_class;
  posts: Array<Post>;

  ngOnInit() {
    this.loadPosts();
  }

  // raise first child img component using CSS class
  cardRaise($event) {
    this.temp_class = $event.target.querySelector('img');
    if (this.temp_class) {
      this.temp_class.className += ' hovered';
    }
  }

  // lower first child img component using CSS class
  cardLower($event) {
    this.temp_class = $event.target.querySelector('img');
    if (this.temp_class) {
      this.temp_class.className = this.temp_class.className.replace(/\b hovered\b/g, '');
    }
  }

  loadPosts() {
    this.postService.loadPosts().subscribe(
      response => {
        this.posts = response;
        console.log(this.posts);
      }
    );
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }
}
