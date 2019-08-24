import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  @ViewChild('canvas', {static: true}) canvas !: ElementRef['nativeElement'];

  constructor() { }

  ngOnInit() {
    console.log(this.canvas['nativeElement'].offsetHeight);
    console.log(this.canvas['nativeElement'].offsetWidth);
  }
}
