import { NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MailServerModule } from '../../../modules/email/server/server.module';

@Component({
  selector: 'app-mail-form',
  templateUrl: './mail-form.component.html',
  styleUrls: ['./mail-form.component.scss']
})

@NgModule({
  imports: [
    MailServerModule
  ],
  declarations: [],
})

export class MailFormComponent implements OnInit {

  mailForm = new FormGroup({
    sender: new FormControl(
      '', 
      [
        Validators.required,
        Validators.email
      ]
    ),
    subject: new FormControl(
      '', 
      [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(100)
      ]
      ),
    message: new FormControl(
      '', 
      [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(500)
      ]
    ),
  });

  submitted = false;

  constructor() {}

  ngOnInit() {
  }

  onSubmit() { 

    this.submitted = true; 

    if (this.mailForm.valid) {

      // TODO: Send message.
    }
  }

  getSenderErrorMessage() {
    return this.mailForm.get('sender').hasError('required') ? 'You must enter a value' :
        this.mailForm.get('sender').hasError('email') ? 'Not a valid email' :
            '';
  }

  getSubjectErrorMessage() {
    return this.mailForm.get('subject').hasError('required') ? 'You must enter a value' :
        this.mailForm.get('subject').value.length < 4 ? 'Minimum length: 4 charaters' :
          this.mailForm.get('subject').value.length > 100 ? 'Maximum length: 100 charaters' : '';
  }

  getMessageErrorMessage() {
    return this.mailForm.get('message').hasError('required') ? 'You must enter a value' : 
        this.mailForm.get('message').value.length < 4 ? 'Minimum length: 4 charaters' :
          this.mailForm.get('message').value.length > 500 ? 'Maximum length: 500 charaters' : '';
  }
}
