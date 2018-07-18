import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'dds-request-load',
  templateUrl: './dds-request-load.component.html',
  styleUrls: ['./dds-request-load.component.scss']
})
export class DdsRequestLoadComponent implements OnInit {

@Input() requestLoadMessage;

  constructor() { }

  ngOnInit() {
  }

}
