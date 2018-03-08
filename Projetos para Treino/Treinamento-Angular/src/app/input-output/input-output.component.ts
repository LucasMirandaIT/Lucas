import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.css']
})
export class InputOutputComponent implements OnInit {

@Input()
  endereco: any;

@Output ()
myClick = new EventEmitter();

callClick(){
  this.myClick.emit('Indra');
}

  constructor() { }

  ngOnInit() {
  }

}
