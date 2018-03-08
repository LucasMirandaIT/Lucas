import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-output2',
  templateUrl: './input-output2.component.html',
  styleUrls: ['./input-output2.component.css']
})
export class InputOutput2Component implements OnInit {

  constructor() { }

  Message: any;

  @Output()
  meuclique = new EventEmitter();

clique() {
  alert (this.Message);
  //this.meuclique.emit('Mensagem!!');
}

  ngOnInit() {
  }

}
