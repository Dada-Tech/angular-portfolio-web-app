import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Dada-Portfolio';
  constructor(private router: Router) { }

  ifCurrentUrl(url) {
    return this.router.url === url;
  }
}
