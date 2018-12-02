import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent implements OnInit {

  public mailIcon: string = "mail";
  public lat: number      = 54.544020;
  public lng: number      = 9.912170;
  public zoom: number     = 8;
  public open: boolean    = true;

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
