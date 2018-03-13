import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { EventEmitterService } from '../../../../services/event-emitter/event-emitter.service';

@Component({
  selector: 'app-cnpj-search',
  templateUrl: './cnpj-search.component.html',
  styleUrls: ['./cnpj-search.component.css']
})
export class CnpjSearchComponent implements OnInit {

  channels: string [] = ['Real', 'Preservado', 'Oculto'];
  changeEmmit: boolean = false;

  constructor(private eventEmitterService : EventEmitterService) { }

  ngOnInit() {
    $(document).ready(function() {
      $('select').material_select();
      $('ul.tabs').tabs();
    });
    
  }

  addValues() {
    this.changeEmmit = !this.changeEmmit;
    EventEmitterService.get('addClick').emit(this.changeEmmit);
  }

}
