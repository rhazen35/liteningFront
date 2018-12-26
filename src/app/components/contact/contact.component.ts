import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent implements OnInit {

  public mailIcon: string     = "drafts";
  public lat: number          = 54.544020;
  public lng: number          = 9.912170;
  public zoom: number         = 8;
  public open: boolean        = true;
  public contactEmail: string = "info@litening.org";

  constructor() {}

  ngOnInit() {

    setTimeout(() => {
      this.mailIcon = "mail";
    }, 2500);
  }

  mailEnter() {
    this.mailIcon = "drafts";

  }

  mailLeave() {
    this.mailIcon = "mail";
  }

  enableMap(event) {
    event.target.style.pointerEvents = "none";
  }
}
