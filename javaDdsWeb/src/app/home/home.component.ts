import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {

  arrayThree: any;
  arrayTwo: any;
  arrayOne: any;

  constructor() { }

  ngAfterViewInit() {
    $('.collapsible').collapsible();    
  }
}
