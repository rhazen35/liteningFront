import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-mail-form',
  templateUrl: './mail-form.component.html',
  styleUrls: ['./mail-form.component.scss']
})
export class MailFormComponent implements OnInit {

  mailForm = new FormGroup({
    sender: new FormControl(''),
    subject: new FormControl(''),
    message: new FormControl(''),
  });

  constructor() { }

  ngOnInit() {
  }

}
