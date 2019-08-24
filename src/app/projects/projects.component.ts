import {Component, OnInit} from '@angular/core';

import {PostsService} from '../services/posts.service';
import { ModalService } from '../_modal';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})

export class ProjectsComponent implements OnInit {

  constructor(private postService: PostsService, private modalService: ModalService) { }
  temp_class;
  posts;

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

  // lower first child img component using CSS class. null when floating card is clicked not parent
  // disabling child mouse events so no check needed
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
      }
    );
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

  // get the jw-modal id related to card. where card-x , modal id is x
  searchOpen($event) {
    this.openModal($event.target.id.replace('card-', ''));
  }
}
