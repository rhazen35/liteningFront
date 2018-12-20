import { Component, OnInit } from '@angular/core';
import { Storm } from '../../../assets/js/storm';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public storm: Storm;

  constructor() { 
    this.storm = new Storm();
  }

  ngOnInit() {
      this.storm.storm();

      setTimeout(function() {
        document.getElementById('canvas1').classList.add('silenceAfter');
        document.getElementById('canvas2').classList.add('silenceAfter');
        document.getElementById('canvas3').classList.add('silenceAfter');
      }, 4500);
  }
}
