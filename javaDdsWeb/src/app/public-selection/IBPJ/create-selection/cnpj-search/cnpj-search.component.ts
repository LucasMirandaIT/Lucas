import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { EventEmitterService } from '../../../../services/event-emitter/event-emitter.service';

@Component({
  selector: 'app-cnpj-search',
  templateUrl: './cnpj-search.component.html',
  styleUrls: ['./cnpj-search.component.css']
})
export class CnpjSearchComponent implements OnInit {

  changeEmmit: boolean = false;
  allModules = ['Oculto', 'Desenvolvimento', 'Preservado']

  constructor(private eventEmitterService : EventEmitterService) { }

  ngOnInit() {
    this.allModules = ['Oculto', 'Desenvolvimento', 'Preservado']
  }

  addValues() {
    this.changeEmmit = !this.changeEmmit;
    EventEmitterService.get('addClick').emit(this.changeEmmit);
  }

  clicar (){
  }

}
