import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-logo-santander',
  templateUrl: './logo-santander.component.html',
  styleUrls: ['./logo-santander.component.scss']
})
export class LogoSantanderComponent implements OnInit {

  constructor() { }
  @Input() color: String = '#F00';
  ngOnInit() {
  }

}
