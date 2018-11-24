import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

// Material Form Components
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';

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
