import { NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-mail-form',
  templateUrl: './mail-form.component.html',
  styleUrls: ['./mail-form.component.scss']
})

@NgModule({

})

export class MailFormComponent implements OnInit {

  mailForm = new FormGroup({
    sender: new FormControl('', [
        Validators.required,
        Validators.email
      ]
    ),
    subject: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(100)
      ]
      ),
    message: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(500)
      ]
    ),
  });

  submitted = false;

  constructor(
      private http: HttpClient
  ) {

  }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
    if (this.mailForm.valid) {

    }
  }

  onTextAreaInput(event) {
    const textarea = event.target;

    textarea.style.height = '';
    textarea.style.height = Math.min(textarea.scrollHeight, 1000) + 'px';
  }

  getSenderErrorMessage() {
    return this.mailForm.get('sender').hasError('required') ? 'Enter an email adress.' :
        this.mailForm.get('sender').hasError('email') ? 'The email is not valid.' :
            '';
  }

  getSubjectErrorMessage() {
    return this.mailForm.get('subject').hasError('required') ? 'Enter a subject.' :
        this.mailForm.get('subject').value.length < 4 ? 'Minimum length: 4 charaters' :
          this.mailForm.get('subject').value.length > 100 ? 'Maximum length: 100 charaters' : '';
  }

  getMessageErrorMessage() {
    return this.mailForm.get('message').hasError('required') ? 'Leave your message.' :
        this.mailForm.get('message').value.length < 4 ? 'Minimum length: 4 charaters' :
          this.mailForm.get('message').value.length > 500 ? 'Maximum length: 500 charaters' : '';
  }
}
