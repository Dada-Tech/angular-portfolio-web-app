import {Component, ElementRef, OnInit} from '@angular/core';

import {AfterViewInit, Directive, QueryList, ViewChildren} from '@angular/core';

import {PostsService} from '../services/posts.service';
import {Post} from '../home/home.component';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})

export class ProjectsComponent implements OnInit {

  constructor(private postService: PostsService, private elRef: ElementRef) { }
  temp_class;
  posts: Array<Post>;

  ngOnInit() {
    this.loadPosts();
    // console.log(this.elRef.nativeElement.querySelectorAll('.test'));
    this.elRef.nativeElement.querySelector('.test').className = 'test2';
    console.log(this.elRef.nativeElement.querySelector('.test'));
    console.log(this.elRef.nativeElement.querySelector('.test2'));
  }

  // specific element that was triggered

  cardRaise($event) {
    this.temp_class = $event.target.querySelector('img');
    if (this.temp_class) {
      this.temp_class.className += ' hovered';
    }
  }

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
}
