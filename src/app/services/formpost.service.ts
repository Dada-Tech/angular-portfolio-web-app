import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FormpostService {
  constructor(private httpClient: HttpClient) { }

  sendPost(messageForm, token) {
    return this.httpClient.post(environment.firebaseUrl,
      {
        'name':  messageForm.name,
        'email':  messageForm.email,
        'subject':  messageForm.subject,
        'message':  messageForm.message,
        'recaptcha': token
      });
  }
}
