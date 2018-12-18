import { Component, OnInit } from '@angular/core';

import { Storm } from '../../../assets/js/storm';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public storm;

  constructor() { 
    this.storm = new Storm();
  }

  ngOnInit() {
    this.storm.storm();
  }
}
