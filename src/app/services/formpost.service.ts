import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormpostService {
  baseUrl = 'https://portfolio-emailer.firebaseapp.com/mail';
  constructor(private httpClient: HttpClient) { }

  sendPost(messageForm) {
    return this.httpClient.post(this.baseUrl,
      {
        'name':  messageForm.name,
        'email':  messageForm.email,
        'subject':  messageForm.subject,
        'message':  messageForm.message
      });
  }
}
