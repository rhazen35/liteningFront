import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() {}

  ngOnInit() {
    
  }

  title    = "Litening Web Solutions";
  subTitle = "There are no problems, only opportunities.";

}
