import {AfterContentInit, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { ModalService } from '../_modal';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit, AfterContentInit {
  constructor(private modalService: ModalService) { }
  temp_class;
  @Input() post;
  @Input() index;

  @Output() exampleOutput = new EventEmitter<string>();

  ngOnInit() {
  }

  ngAfterContentInit() {
    setTimeout(() => {
      this.exampleOutput.emit(this.index);
    });
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
