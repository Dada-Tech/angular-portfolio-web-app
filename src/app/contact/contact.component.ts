import {Component, OnDestroy, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { FormpostService } from '../services/formpost.service';
import { ReCaptchaV3Service } from 'ng-recaptcha';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, OnDestroy {
  messageForm: FormGroup;
  submitOnceFlag = true;
  submitted = false;
  dbError = false;
  captchaSub;

  constructor(private formBuilder: FormBuilder, private formPostService: FormpostService, private recaptchaV3Service: ReCaptchaV3Service) {
    this.messageForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      message: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.minLength(3)]],
      subject: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  handleToken(token) {
    console.log('This is your token: ' + token);
  }

  public executeImportantAction(): void {
    this.captchaSub = this.recaptchaV3Service.execute('importantAction')
      .subscribe((token) => this.handleToken(token));
  }

  onSubmit() {
    this.executeImportantAction();
    this.markFormGroupTouched(this.messageForm);
    if (this.messageForm.valid && !this.submitted && this.submitOnceFlag) {
      this.submitOnceFlag = false;

      this.formPostService.sendPost(this.messageForm.value).subscribe(
        data  => {
          this.submitted = true;
        },
        error  => {
          this.dbError = true;
        }
      );
    }
  }

  private markFormGroupTouched(formGroup: FormGroup) {
    (<any>Object).values(formGroup.controls).forEach(control => {
      control.markAsTouched();

      if (control.controls) {
        this.markFormGroupTouched(control);
      }
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    if (this.captchaSub) {
      this.captchaSub.unsubscribe();
    }
  }
}
