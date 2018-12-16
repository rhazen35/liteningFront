import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-qualities',
  templateUrl: './qualities.component.html',
  styleUrls: ['./qualities.component.scss']
})
export class QualitiesComponent implements OnInit {

  public show: boolean = false;

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
   
    this.show = true;
  }
}
