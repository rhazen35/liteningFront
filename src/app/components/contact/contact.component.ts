import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  mailIcon = "mail";

  constructor() {}

  ngOnInit() {
  }

  mailEnter() {
    this.mailIcon = "drafts";
  }

  mailLeave() {
    this.mailIcon = "mail";
  }
}
