import {Component, OnDestroy, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { FormpostService } from '../services/formpost.service';
import { ReCaptchaV3Service } from 'ng-recaptcha';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, OnDestroy {
  messageForm: FormGroup;
  submitOnceFlag = true;
  submitted = false;
  serverError = false;
  captchaSub;
  captcha_token;

  constructor(private formBuilder: FormBuilder, private formPostService: FormpostService, private recaptchaV3Service: ReCaptchaV3Service,
              private spinner: NgxSpinnerService) {
    this.messageForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      message: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.minLength(3)]],
      subject: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  public getCaptcha(): void {
    this.captchaSub = this.recaptchaV3Service.execute('importantAction')
      .subscribe((token) => {
        this.captcha_token = '' + token;
        this.dbSubmit();
      });
  }

  private dbSubmit() {
    this.formPostService.sendPost(this.messageForm.value, this.captcha_token).subscribe(
      data  => {
        this.submitted = true;
        this.spinner.hide();
      },
      error  => {
        console.error(error);
        this.serverError = true;
        this.spinner.hide();
      }
    );
  }

  public formValidate() {
    this.markFormGroupTouched(this.messageForm);
    if (this.messageForm.valid && !this.submitted && this.submitOnceFlag) {
      this.submitOnceFlag = false;
      this.spinner.show();
      this.getCaptcha();
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
