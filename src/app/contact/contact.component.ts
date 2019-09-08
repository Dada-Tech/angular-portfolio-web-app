import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { FormpostService } from '../services/formpost.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  messageForm: FormGroup;
  submitOnceFlag = true;
  submitted = false;
  dbError = false;

  constructor(private formBuilder: FormBuilder, private formPostService: FormpostService) {
    this.messageForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      message: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.minLength(3)]],
      subject: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  onSubmit() {
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

}
