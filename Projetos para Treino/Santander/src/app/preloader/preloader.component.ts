import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preloader',
  templateUrl: './preloader.component.html',
  styleUrls: ['./preloader.component.css']
})
export class PreloaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.addEventListener("DOMContentLoaded", function(){
      $('.preloader-background').delay(1700).fadeOut('slow');
      
      $('.preloader-wrapper')
        .delay(1700)
        .fadeOut();
    });
  }

}
