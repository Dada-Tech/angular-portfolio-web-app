import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FollowlinkService {
  constructor() { }

  open(link) {
    window.open('//' + link);
  }
}
